// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { svgCharactersObject, SvgType } from './shapes';

import Matter, {
  Engine,
  Render,
  Runner,
  Bodies,
  Composite,
  Mouse,
  MouseConstraint,
  Body,
  Vertices,
  Svg,
  World,
} from 'matter-js';
import MatterWrap from 'matter-wrap'; // Import the plugin
Matter.use(MatterWrap); // Use the plugin with Matter.js

const MatterDemo = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const bodies = [];

  // Enable wrapping for all bodies added to the world
  // You can set wrap bounds after creating each body, e.g. in loadResponsiveBody:
  function enableWrap(body, width, height) {
    body.plugin.wrap = {
      min: { x: 0, y: 0 },
      max: { x: width, y: height },
    };
  }

  useEffect(() => {
    async function loadResponsiveBody(
      character: SvgType,
      world: World,
      scale = 1
    ) {
      const res = await fetch(character.path);
      const raw = await res.json();

      // Clone so we don’t mutate original
      const verts = raw.map(v => ({ x: v.x, y: v.y })); // ← clone manually

      // Dynamically scale for responsive design
      Vertices.scale(verts, scale, scale, Vertices.centre(verts));

      const body = Matter.Bodies.fromVertices(
        character.x,
        character.y,
        [verts],
        {
          //inertia: Infinity, stops rotation
          label: character.name,
          frictionAir: character.frictionAir, // air resistance
          restitution: character.restitution, // bounciness
          isStatic: false,
          force: {
            x: 1, // Add any initial force if needed
            y: 1, // Add any initial force if needed
          },
          // isSensor: true, // Uncomment if you want it to be a sensor
          render: {
            sprite: {
              texture: character.sprite,
              xScale: scale,
              yScale: scale,
            },
          },
        },
        true
      );

      enableWrap(body, width, height);

      Matter.World.add(world, body);
      // store body and its applied scale so we can update it on resize
      body._scale = scale || 1;
      if (body.render && body.render.sprite) {
        body.render.sprite.xScale = body._scale;
        body.render.sprite.yScale = body._scale;
      }
      bodies[character.name] = body;
    }

    async function loadSvgCharacters(
      characters: SvgType[],
      world: World,
      delay = 25,
      scale = 1
    ) {
      for (const character of characters) {
        await loadResponsiveBody(character, world, scale);
        await new Promise(res => setTimeout(res, delay));
      }
    }

    // create an engine
    const engine = Engine.create();

    const world = engine.world;
    engineRef.current = engine;
    engine.gravity.y = 0; // Adjust gravity if needed

    const width = window.innerWidth;
    const height = window.innerHeight;

    // create a renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: 'transparent',
        // showAngleIndicator: true,
      },
    });

    // 🖱️ Mouse constraint for interactivity
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    mouse.element.removeEventListener('wheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

    Composite.add(world, mouseConstraint);

    render.mouse = mouse;

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

    // Load all SVG's
    const getScale = () => {
      const minWidth = 375; // mobile breakpoint
      const maxWidth = 1400; // desktop breakpoint
      const minScale = 0.3; // mobile scale
      const maxScale = 1; // desktop scale

      const ratio = Math.min(
        Math.max((window.innerWidth - minWidth) / (maxWidth - minWidth), 0),
        1
      );
      return minScale + (maxScale - minScale) * ratio;
    };

    loadSvgCharacters(svgCharactersObject, world, 500, getScale());

    // Handle window resize: adjust renderer size, wrap bounds and body scales
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      Render.setSize(render, newWidth, newHeight);

      // compute target scale for bodies
      const targetScale = getScale();

      // Update wrap bounds and scale bodies
      for (const bodyName in bodies) {
        const body = bodies[bodyName];
        if (!body) continue;

        // update wrap bounds for matter-wrap
        if (body.plugin) {
          body.plugin.wrap = {
            min: { x: 0, y: 0 },
            max: { x: newWidth, y: newHeight },
          };
        }

        // rescale the body geometry and sprite if scale changed
        const prevScale = body._scale || 1;
        const scaleFactor = targetScale / prevScale;
        if (scaleFactor !== 1 && Math.abs(scaleFactor - 1) > 1e-6) {
          Body.scale(body, scaleFactor, scaleFactor);
          body._scale = targetScale;
          if (body.render && body.render.sprite) {
            body.render.sprite.xScale = targetScale;
            body.render.sprite.yScale = targetScale;
          }
        }
      }
    };

    // Apply force to bodies near the mouse on move
    const hoverRadius = 245;
    const hoverForce = 0.5;
    let prevMouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = render.canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const dx = mx - prevMouse.x;
      const dy = my - prevMouse.y;
      prevMouse = { x: mx, y: my };

      const allBodies = Composite.allBodies(world);
      for (const body of allBodies) {
        if (body.isStatic) continue;
        const bx = body.position.x;
        const by = body.position.y;
        const dist = Math.sqrt((bx - mx) ** 2 + (by - my) ** 2);
        if (dist < hoverRadius) {
          const strength = (1 - dist / hoverRadius) * hoverForce;
          Body.applyForce(body, body.position, {
            x: dx * strength,
            y: dy * strength,
          });
        }
      }
    };

    render.canvas.addEventListener('mousemove', handleMouseMove);

    // Device shake handler for mobile
    const shakeThreshold = 12;
    const shakeForceMagnitude = 0.04;
    let lastAccel = { x: 0, y: 0 };

    const handleDeviceMotion = (e: DeviceMotionEvent) => {
      // e.acceleration may exist as an object but have null x/y/z on many Android devices;
      // fall back to accelerationIncludingGravity which is always populated.
      const accel =
        e.acceleration?.x != null ? e.acceleration : e.accelerationIncludingGravity;
      if (!accel) return;

      const ax = accel.x ?? 0;
      const ay = accel.y ?? 0;
      const dx = ax - lastAccel.x;
      const dy = ay - lastAccel.y;
      lastAccel = { x: ax, y: ay };

      const magnitude = Math.sqrt(dx * dx + dy * dy);
      if (magnitude > shakeThreshold) {
        const allBodies = Composite.allBodies(world);
        for (const body of allBodies) {
          if (body.isStatic) continue;
          Body.applyForce(body, body.position, {
            x: dx * shakeForceMagnitude,
            y: -dy * shakeForceMagnitude, // device +Y is up; canvas +Y is down
          });
        }
      }
    };

    const registerMotion = () => {
      if (
        typeof DeviceMotionEvent !== 'undefined' &&
        typeof (DeviceMotionEvent as any).requestPermission === 'function'
      ) {
        (DeviceMotionEvent as any)
          .requestPermission()
          .then((permission: string) => {
            if (permission === 'granted') {
              window.addEventListener('devicemotion', handleDeviceMotion);
            }
          })
          .catch(console.error);
      } else {
        window.addEventListener('devicemotion', handleDeviceMotion);
      }
    };

    const isMobile = 'ontouchstart' in window;
    const isIos =
      typeof (DeviceMotionEvent as any).requestPermission === 'function';

    let motionRegistered = false;
    const handleFirstTouch = () => {
      if (!motionRegistered) {
        motionRegistered = true;
        registerMotion();
      }
    };

    if (isMobile) {
      if (isIos) {
        // iOS requires requestPermission from a user gesture
        render.canvas.addEventListener('touchstart', handleFirstTouch);
      } else {
        // Android: register immediately, no permission needed
        window.addEventListener('devicemotion', handleDeviceMotion);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      render.canvas.removeEventListener('mousemove', handleMouseMove);
      render.canvas.removeEventListener('touchstart', handleFirstTouch);
      window.removeEventListener('devicemotion', handleDeviceMotion);
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div className="matter-container" ref={sceneRef} />;
};

export default MatterDemo;

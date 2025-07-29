// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { shapeDefs, SvgList } from './shapes';
import { spawnLightning } from './lightning';
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
  let isFiring = false;
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const groundRef = useRef(null);
  const leftWallRef = useRef(null);
  const rightWallRef = useRef(null);
  const myRef = useRef(null);
  const THICCNESS = 60;

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
    async function loadResponsiveBody(shape: SvgList, world: World, scale = 1) {
      const res = await fetch(shape.path);
      const raw = await res.json();

      function randomBetweenMinusOneAndOne() {
        return Math.random() * 2 - 1;
      }

      // Clone so we don’t mutate original
      const verts = raw.map(v => ({ x: v.x, y: v.y })); // ← clone manually

      // Dynamically scale for responsive design
      Vertices.scale(verts, scale, scale, Vertices.centre(verts));

      const body = Matter.Bodies.fromVertices(
        shape.x,
        shape.y,
        [verts],
        {
          //inertia: Infinity, stops rotation
          label: shape.name,
          frictionAir: shape.frictionAir, // air resistance
          restitution: shape.restitution, // bounciness
          isStatic: false,
          force: {
            x: randomBetweenMinusOneAndOne(), // Add any initial force if needed
            y: randomBetweenMinusOneAndOne(), // Add any initial force if needed
          },
          // isSensor: true, // Uncomment if you want it to be a sensor
          render: {
            sprite: {
              texture: shape.sprite,
              xScale: scale,
              yScale: scale,
            },
          },
        },
        true
      );

      // Enable wrapping for this body
      const width = sceneRef.current?.clientWidth || 800;
      const height = sceneRef.current?.clientHeight || 600;
      enableWrap(body, width, height);

      Matter.World.add(world, body);
      bodies[shape.name] = body;
    }

    async function loadAllShapes(
      shapes: SvgList[],
      world: World,
      delay = 25,
      scale = 1
    ) {
      for (const shape of shapes) {
        await loadResponsiveBody(shape, world, scale);
        await new Promise(res => setTimeout(res, delay));
      }
      setupClickHandler(bodies['rainbowOne']);
    }

    const setupClickHandler = shape => {
      render.canvas.addEventListener('mousedown', e => {
        const mousePos = mouse.position;

        // Get cloud under mouse (simplified hit-test)
        const clickedBody = Matter.Query.point([shape], mousePos)[0];

        if (clickedBody) {
          isFiring = true;
          spawnLightningLoop(shape);
        }
      });
    };

    const spawnLightningLoop = shape => {
      if (!isFiring) return;
      spawnLightning(shape.position.x, shape.position.y + 220, world, getScale); // offset downward

      setTimeout(() => {
        spawnLightningLoop(shape); // recurse if still holding
      }, 500); // fire every 0.5s or whatever feels good
    };

    // create an engine
    const engine = Engine.create();

    const world = engine.world;
    engineRef.current = engine;
    engine.gravity.y = 0; // Adjust gravity if needed

    const width = sceneRef.current.clientWidth || 800;
    const height = sceneRef.current.clientHeight || 600;

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

    const handleResize = () => {
      const newWidth = sceneRef.current.clientWidth;
      const newHeight = sceneRef.current.clientHeight;

      render.canvas.width = newWidth;
      render.canvas.height = newHeight;
      render.options.width = newWidth;
      render.options.height = newHeight;

      // Scale all bodies in the "bodies" constant
      const scale = Math.min(newWidth / 1200, newHeight / 1200);
      Object.values(bodies).forEach(body => {
        if (body) {
          // Calculate current scale based on body's render.sprite.xScale
          const currentScale = body.render?.sprite?.xScale || 1;
          const scaleFactor = scale / currentScale;
          Matter.Body.scale(body, scaleFactor, scaleFactor);

          // Update sprite scale for rendering
          if (body.render && body.render.sprite) {
            body.render.sprite.xScale = scale;
            body.render.sprite.yScale = scale;
          }
        }
      });
    };

    render.canvas.addEventListener('mouseup', () => {
      isFiring = false;
    });

    window.addEventListener('resize', handleResize);

    // Load all SVG's
    const getScale = () => {
      const baseWidth = 1500; // Base width for scaling
      return Math.min(
        window.innerWidth / baseWidth,
        window.innerHeight / baseWidth
      );
    };
    loadAllShapes(shapeDefs, world, 1000, getScale());

    return () => {
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

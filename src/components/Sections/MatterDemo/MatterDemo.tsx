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
      const minScale = 0.5; // mobile scale
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

    window.addEventListener('resize', handleResize);

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

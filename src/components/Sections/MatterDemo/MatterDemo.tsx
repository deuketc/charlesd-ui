// @ts-nocheck
import { useEffect, useRef } from 'react';
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

type SvgList = {
  sprite: string;
  path: string;
  x: number;
  y: number;
};

const shapeDefs = [
  {
    sprite: '/svg/smiley-tounge.svg',
    path: '/vertices/smiley-tounge-path.json',
    x: 300,
    y: 400,
  },
  {
    sprite: '/svg/pill.svg',
    path: '/vertices/pill-path.json',
    x: 400,
    y: 200,
  },
  {
    sprite: '/svg/bomb.svg',
    path: '/vertices/bomb-path.json',
    x: 500,
    y: 300,
  },
  {
    sprite: '/svg/cassette.svg',
    path: '/vertices/cassette-path.json',
    x: 600,
    y: 100,
  },
  {
    sprite: '/svg/flower.svg',
    path: '/vertices/flower-path.json',
    x: 200,
    y: 400,
  },
  {
    sprite: '/svg/rainbow.svg',
    path: '/vertices/rainbow-path.json',
    x: 400,
    y: 0,
  },
  {
    sprite: '/svg/flower-tounge.svg',
    path: '/vertices/flower-tounge-path.json',
    x: 500,
    y: 350,
  },
];

async function loadResponsiveBody(shape: SvgList, world: World, scale = 1) {
  const res = await fetch(shape.path);
  const raw = await res.json();

  // Clone so we don’t mutate original
  const verts = raw.map(v => ({ x: v.x, y: v.y })); // ← clone manually

  // Dynamically scale for responsive design
  Vertices.scale(verts, scale, scale, Vertices.centre(verts));

  const body = Matter.Bodies.fromVertices(
    shape.x,
    shape.y,
    [verts],
    {
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

  Matter.World.add(world, body);
  return body;
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
}

const MatterDemo = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const groundRef = useRef(null);
  const leftWallRef = useRef(null);
  const rightWallRef = useRef(null);
  const THICCNESS = 60;

  useEffect(() => {
    // create an engine
    const engine = Engine.create();

    const world = engine.world;
    engineRef.current = engine;

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

    renderRef.current = render;

    // Create initial ground
    const ground = Bodies.rectangle(
      width / 2,
      height + THICCNESS / 2,
      width + 100,
      THICCNESS,
      {
        isStatic: true,
        render: { fillStyle: '#ffffff' },
      }
    );
    const leftWall = Bodies.rectangle(-30, height / 2, 60, height + 100, {
      isStatic: true,
      render: { fillStyle: '#95a5a6' },
    });
    const rightWall = Bodies.rectangle(
      width + 30,
      height / 2,
      60,
      height + 100,
      {
        isStatic: true,
        render: { fillStyle: '#95a5a6' },
      }
    );

    groundRef.current = ground;
    leftWallRef.current = leftWall;
    rightWallRef.current = rightWall;

    // add all of the bodies to the world
    Composite.add(world, [ground, leftWall, rightWall]);

    // Load all SVG's
    loadAllShapes(shapeDefs, world, 1000, 1);

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

      // Resize & reposition ground
      Body.setPosition(groundRef.current, {
        x: newWidth / 2,
        y: newHeight + THICCNESS / 2,
      });
      Body.setVertices(groundRef.current, [
        { x: 0, y: newHeight - THICCNESS },
        { x: newWidth, y: newHeight - THICCNESS },
        { x: newWidth, y: newHeight },
        { x: 0, y: newHeight },
      ]);

      // Resize left wall
      Body.setPosition(leftWallRef.current, { x: -30, y: newHeight / 2 });
      Body.setVertices(leftWallRef.current, [
        { x: -60, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: newHeight },
        { x: -60, y: newHeight },
      ]);

      // Resize right wall
      Body.setPosition(rightWallRef.current, {
        x: newWidth + 30,
        y: newHeight / 2,
      });
      Body.setVertices(rightWallRef.current, [
        { x: newWidth, y: 0 },
        { x: newWidth + 60, y: 0 },
        { x: newWidth + 60, y: newHeight },
        { x: newWidth, y: newHeight },
      ]);
    };

    window.addEventListener('resize', handleResize);

    const onScroll = () => {
      const baseHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const shrinkAmount = Math.min(scrollY, baseHeight);

      const newHeight = baseHeight - shrinkAmount + THICCNESS;

      // Resize canvas
      render.canvas.style.height = `${newHeight}px`;
      render.canvas.height = newHeight;
      render.options.height = newHeight;

      // Move ground up so it stays at the new "bottom"
      Body.setPosition(groundRef.current, {
        x: window.innerWidth / 2,
        y: newHeight - 30,
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
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

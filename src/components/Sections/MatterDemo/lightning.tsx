import Matter, { Vertices } from 'matter-js';

export async function spawnLightning(x, y, world, scaleFunc) {
  const res = await fetch('/vertices/lightning-path.json');
  const raw = await res.json();
  // Clone so we don’t mutate original
  const verts = raw.map(v => ({ x: v.x, y: v.y })); // ← clone manually

  // Dynamically scale for responsive design
  Vertices.scale(verts, scaleFunc(), scaleFunc(), Vertices.centre(verts));

  const lightning = Matter.Bodies.fromVertices(
    x,
    y,
    [verts],
    {
      restitution: 0.4,
      render: {
        sprite: {
          texture: '/svg/lightning.svg',
          xScale: scaleFunc(),
          yScale: scaleFunc(),
        },
      },
    },
    true
  );

  Matter.World.add(world, lightning);

  // Auto-remove after 3 seconds
  setTimeout(() => {
    Matter.World.remove(world, lightning);
  }, 3000);
}

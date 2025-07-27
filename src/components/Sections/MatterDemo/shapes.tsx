export type SvgList = {
  name: string;
  sprite: string;
  path: string;
  x: number;
  y: number;
  frictionAir: number;
  restitution: number;
};

export const shapeDefs: SvgList[] = [
  {
    name: 'smileyTounge',
    sprite: '/svg/smiley-tounge.svg',
    path: '/vertices/smiley-tounge-path.json',
    x: (window.innerWidth * 30) / 100,
    y: (window.innerHeight * 20) / 100,
    frictionAir: 0,
    restitution: 0.5,
  },
  {
    name: 'bomb',
    sprite: '/svg/bomb.svg',
    path: '/vertices/bomb-path.json',
    x: (window.innerWidth * 30) / 100,
    y: (window.innerHeight * 20) / 100,
    frictionAir: 0,
    restitution: 0.5,
  },
  {
    name: 'pill',
    sprite: '/svg/pill.svg',
    path: '/vertices/pill-path.json',
    x: (window.innerWidth * 10) / 100,
    y: (window.innerHeight * 20) / 100,
    frictionAir: 0,
    restitution: 0.5,
  },
  {
    name: 'cassette',
    sprite: '/svg/cassette.svg',
    path: '/vertices/cassette-path.json',
    x: (window.innerWidth * 40) / 100,
    y: (window.innerHeight * 20) / 100,
    frictionAir: 0,
    restitution: 0.5,
  },
  {
    name: 'flower',
    sprite: '/svg/flower.svg',
    path: '/vertices/flower-path.json',
    x: (window.innerWidth * 10) / 100,
    y: (window.innerHeight * 20) / 100,
    frictionAir: 0,
    restitution: 0.5,
  },
  {
    name: 'flowerTounge',
    sprite: '/svg/flower-tounge.svg',
    path: '/vertices/flower-tounge-path.json',
    x: (window.innerWidth * 30) / 100,
    y: (window.innerHeight * 20) / 100,
    frictionAir: 0,
    restitution: 0.5,
  },
  {
    name: 'rainbowOne',
    sprite: '/svg/rainbow.svg',
    path: '/vertices/rainbow-path.json',
    x: (window.innerWidth * 15) / 100,
    y: (window.innerHeight * 0) / 100,
    frictionAir: 1,
    restitution: 0,
  },
  {
    name: 'rainbowTwo',
    sprite: '/svg/rainbow.svg',
    path: '/vertices/rainbow-path.json',
    x: (window.innerWidth * 40) / 100,
    y: (window.innerHeight * 0) / 100,
    frictionAir: 1,
    restitution: 0,
  },
];

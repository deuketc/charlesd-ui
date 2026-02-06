export type SvgType = {
  name: string;
  sprite: string;
  path: string;
  x: number;
  y: number;
  frictionAir: number;
  restitution: number;
};

export function getRandomPercent(): number {
  return Math.random() * 100;
}

const AIR_FRICTION = 0.03;
const RESTITUTION = 0.8;

export const svgCharactersObject: SvgType[] = [
  {
    name: 'smileyTounge',
    sprite: '/svg/smiley-tounge.svg',
    path: '/vertices/smiley-tounge-path.json',
    x: (window.innerWidth * getRandomPercent()) / 100,
    y: (window.innerHeight * getRandomPercent()) / 100,
    frictionAir: AIR_FRICTION,
    restitution: RESTITUTION,
  },
  {
    name: 'bomb',
    sprite: '/svg/bomb.svg',
    path: '/vertices/bomb-path.json',
    x: (window.innerWidth * getRandomPercent()) / 100,
    y: (window.innerHeight * getRandomPercent()) / 100,
    frictionAir: AIR_FRICTION,
    restitution: RESTITUTION,
  },
  {
    name: 'pill',
    sprite: '/svg/pill.svg',
    path: '/vertices/pill-path.json',
    x: (window.innerWidth * getRandomPercent()) / 100,
    y: (window.innerHeight * getRandomPercent()) / 100,
    frictionAir: 0.008,
    restitution: RESTITUTION,
  },
  {
    name: 'cassette',
    sprite: '/svg/cassette.svg',
    path: '/vertices/cassette-path.json',
    x: (window.innerWidth * getRandomPercent()) / 100,
    y: (window.innerHeight * getRandomPercent()) / 100,
    frictionAir: AIR_FRICTION,
    restitution: RESTITUTION,
  },
  {
    name: 'flower',
    sprite: '/svg/flower.svg',
    path: '/vertices/flower-path.json',
    x: (window.innerWidth * getRandomPercent()) / 100,
    y: (window.innerHeight * getRandomPercent()) / 100,
    frictionAir: AIR_FRICTION,
    restitution: RESTITUTION,
  },
  {
    name: 'flowerTounge',
    sprite: '/svg/flower-tounge.svg',
    path: '/vertices/flower-tounge-path.json',
    x: (window.innerWidth * getRandomPercent()) / 100,
    y: (window.innerHeight * getRandomPercent()) / 100,
    frictionAir: AIR_FRICTION,
    restitution: RESTITUTION,
  },
  {
    name: 'rainbowOne',
    sprite: '/svg/rainbow.svg',
    path: '/vertices/rainbow-path.json',
    x: (window.innerWidth * getRandomPercent()) / 100,
    y: (window.innerHeight * getRandomPercent()) / 100,
    frictionAir: AIR_FRICTION,
    restitution: RESTITUTION,
  },
  {
    name: 'pill',
    sprite: '/svg/pill.svg',
    path: '/vertices/pill-path.json',
    x: (window.innerWidth * getRandomPercent()) / 100,
    y: (window.innerHeight * getRandomPercent()) / 100,
    frictionAir: AIR_FRICTION,
    restitution: RESTITUTION,
  },
];

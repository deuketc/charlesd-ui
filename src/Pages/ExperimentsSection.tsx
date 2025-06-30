import ExperimentsList from '../components/Sections/ExperimentsList/ExperimentsList';

import experimentsDestinyButtonThumb from '../assets/images/experiments-destinybutton-thumb.jpg';
import experimentsScrollAnimationThumb from '../assets/images/experiments-scrollanimation-thumb.jpg';
import experiments3DScene from '../assets/images/experiments-3dscene-thumb.jpg';
import experimentsAnimatedLogos from '../assets/images/experiments-animatedlogos-thumb.jpg';

const experimentsList = [
  {
    title: 'Klaims Kombat',
    description: 'Our team re-imagined as Mortal Kombat fighters with AI',
    tags: 'Leonardo.AI, ElevenLabs.AI, Davinci Resolve',
    date: '20252207T000000',
    thumb: experimentsAnimatedLogos,
    full: '',
    url: 'https://www.youtube.com/watch?v=mmqtxVUZp6A',
  },
  {
    title: 'Fill beaker animation',
    description: 'Click to fill beaker interaction and animation',
    tags: 'Rive',
    date: '20251303T000000',
    thumb: experimentsAnimatedLogos,
    full: '',
    url: 'https://rive.app/marketplace/18003-33777-fill-beaker-animation/',
  },
  {
    title: 'Logo Animations',
    description: 'Animating some of my favourite logos using GSAP',
    tags: 'GSAP, html, SVG',
    date: '20240506T000000',
    thumb: experimentsAnimatedLogos,
    full: '',
    url: 'https://deuketc.github.io/logo-animations/',
  },
  {
    title: '3D Scene',
    description: 'Realtime rendering of a scene created in Blender.',
    tags: '3JS, Blender',
    date: '20240506T000000',
    thumb: experiments3DScene,
    full: '',
    url: 'https://charlesd.co.nz/portal-scene/',
  },
  {
    title: 'Scroll Animation',
    description: 'Animation demo using GSAP (Greensock animation platform)',
    tags: 'Javascript, CSS, GSAP, html, SVG',
    date: '20210406T090940Z',
    thumb: experimentsScrollAnimationThumb,
    full: '../../assets/images/experiments-scrollanimation.jpg',
    url: 'https://deuketc.github.io/tax-saving/',
  },
  {
    title: 'CodePen projects',
    description: 'My favourite snippets and small experiments',
    tags: 'Javascript, CSS, html',
    date: '20140909T000000',
    thumb: experimentsDestinyButtonThumb,
    full: '../../assets/images/experiments-destinybutton.jpg',
    url: 'https://codepen.io/charlesdeukett',
  },
  // {
  //   title: 'Client project',
  //   description: 'Media design school client summative for Zen Bathrooms',
  //   tags: 'Javascript, CSS, GSAP, html, SVG',
  //   date: '20111011T000000',
  //   thumb: experimentsZenThumb,
  //   full: '../../assets/images/full.jpg',
  //   url: 'https://charlesd.co.nz/zen',
  // },
  // {
  //   title: 'Artist portfolio',
  //   description: 'Media Design School artist summative',
  //   tags: 'Wordpress, PHP',
  //   date: '20110411T000000',
  //   thumb: experimentsArtistThumb,
  //   full: '../../images/full.jpg',
  //   url: 'https://charlesd.co.nz/artist/',
  // },
  // {
  //   title: 'Hamburger Button',
  //   description: 'Mobile menu toggle button animation',
  //   tags: 'Javascript, CSS, html',
  //   date: '20110615T120854',
  //   thumb: experimentsHambuttonThumb,
  //   full: '../../assets/images/experiments-hambutton.jpg',
  //   url: 'https://codepen.io/charles-deukett/pen/qBXgaVp',
  // },
  // {
  //   title: 'Pixel art project',
  //   description: 'Family lounge recreated in pixel art form',
  //   tags: 'Photoshop',
  //   date: '20090103T120854',
  //   thumb: experimentsPixelLoungeThumb,
  //   full: '../../assets/images/pixel_lounge_01.jpg',
  //   url: 'https://charlesd.co.nz/pixellounge/pixel_lounge_01.gif',
  // },
];
const ExperimentsSection = () => {
  return <ExperimentsList experimentsList={experimentsList} />;
};

export default ExperimentsSection;

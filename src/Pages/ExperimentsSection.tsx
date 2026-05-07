import {
  faVideo,
  faFlask,
  faAtom,
  faCube,
  faWandMagicSparkles,
  faCarSide,
} from '@fortawesome/free-solid-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import ExperimentsList from '../components/Sections/ExperimentsList/ExperimentsList';

const experimentsList = [
  {
    title: '3D Damage Selector',
    description:
      'Damaged panel selector demo for a insurance claims application',
    tags: ['3js', 'Blender', 'React', 'Zustand'],
    date: '20262604T000000',
    url: 'https://damage-picker-3d.vercel.app/',
    icon: faCarSide,
    backgroundColor: '#A7C7E7',
  },
  {
    title: 'Klaims Kombat',
    description: 'Our team re-imagined as Mortal Kombat fighters with AI',
    tags: ['Leonardo.AI', 'ElevenLabs.AI', 'Davinci Resolve'],
    date: '20252207T000000',
    url: 'https://www.youtube.com/watch?v=mmqtxVUZp6A',
    icon: faVideo,
    backgroundColor: '#FFB7B2',
  },
  {
    title: 'Fill beaker animation',
    description: 'Click to fill beaker interaction and animation',
    tags: ['Rive'],
    date: '20251303T000000',
    url: 'https://rive.app/marketplace/18003-33777-fill-beaker-animation/',
    icon: faFlask,
    backgroundColor: '#E2F0CB',
  },
  {
    title: 'Logo Animations',
    description: 'Animating some of my favourite logos using GSAP',
    tags: ['GSAP', 'html', 'SVG'],
    date: '20240506T000000',
    url: 'https://deuketc.github.io/logo-animations/',
    icon: faAtom,
    backgroundColor: '#C7CEEA',
  },
  {
    title: '3D Scene',
    description: 'Realtime rendering of a scene created in Blender.',
    tags: ['3JS', 'Blender'],
    date: '20240506T000000',
    url: 'https://charlesd.co.nz/portal-scene/',
    icon: faCube,
    backgroundColor: '#FF9AA2',
  },
  {
    title: 'Scroll Animation',
    description: 'Animation demo using GSAP (Greensock animation platform)',
    tags: ['Javascript', 'CSS', 'GSAP', 'html', 'SVG'],
    date: '20210406T090940Z',
    url: 'https://deuketc.github.io/tax-saving/',
    icon: faWandMagicSparkles,
    backgroundColor: '#B5EAD7',
  },
  {
    title: 'CodePen projects',
    description: 'My favourite snippets and small experiments',
    tags: ['Javascript', 'CSS', 'html'],
    date: '20140909T000000',
    url: 'https://codepen.io/charlesdeukett',
    icon: faCodepen,
    backgroundColor: '#FFDAC1',
  },
];
const ExperimentsSection = () => {
  return <ExperimentsList experimentsList={experimentsList} />;
};

export default ExperimentsSection;

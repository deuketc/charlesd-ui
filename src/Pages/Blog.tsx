import BlogList from '../components/Sections/BlogList/BlogList';

import blogDestinyButtonThumb from '../assets/images/blog-destinybutton-thumb.jpg';
import blogScrollAnimationThumb from '../assets/images/blog-scrollanimation-thumb.jpg';
import blog3DScene from '../assets/images/blog-3dscene-thumb.jpg';
import blogAnimatedLogos from '../assets/images/blog-animatedlogos-thumb.jpg';

const blogList = [
  {
    title: 'Logos Animations',
    description: 'Animating some of my favourite logos using GSAP',
    tags: 'GSAP, html, SVG',
    date: '20240506T000000',
    thumb: blogAnimatedLogos,
    full: '',
    url: 'https://deuketc.github.io/logo-animations/',
  },
  {
    title: '3D Scene',
    description: 'Realtime rendering of a scene created in Blender.',
    tags: '3JS, Blender',
    date: '20240506T000000',
    thumb: blog3DScene,
    full: '',
    url: 'https://charlesd.co.nz/portal-scene/',
  },
  {
    title: 'Scroll Animation',
    description: 'Animation demo using GSAP (Greensock animation platform)',
    tags: 'Javascript, CSS, GSAP, html, SVG',
    date: '20210406T090940Z',
    thumb: blogScrollAnimationThumb,
    full: '../../assets/images/blog-scrollanimation.jpg',
    url: 'https://deuketc.github.io/tax-saving/',
  },
  {
    title: 'CodePen projects',
    description: 'My favourite snippets and small experiments',
    tags: 'Javascript, CSS, html',
    date: '20140909T000000',
    thumb: blogDestinyButtonThumb,
    full: '../../assets/images/blog-destinybutton.jpg',
    url: 'https://codepen.io/charles-deukett',
  },
  // {
  //   title: 'Client project',
  //   description: 'Media design school client summative for Zen Bathrooms',
  //   tags: 'Javascript, CSS, GSAP, html, SVG',
  //   date: '20111011T000000',
  //   thumb: blogZenThumb,
  //   full: '../../assets/images/full.jpg',
  //   url: 'https://charlesd.co.nz/zen',
  // },
  // {
  //   title: 'Artist portfolio',
  //   description: 'Media Design School artist summative',
  //   tags: 'Wordpress, PHP',
  //   date: '20110411T000000',
  //   thumb: blogArtistThumb,
  //   full: '../../images/full.jpg',
  //   url: 'https://charlesd.co.nz/artist/',
  // },
  // {
  //   title: 'Hamburger Button',
  //   description: 'Mobile menu toggle button animation',
  //   tags: 'Javascript, CSS, html',
  //   date: '20110615T120854',
  //   thumb: blogHambuttonThumb,
  //   full: '../../assets/images/blog-hambutton.jpg',
  //   url: 'https://codepen.io/charles-deukett/pen/qBXgaVp',
  // },
  // {
  //   title: 'Pixel art project',
  //   description: 'Family lounge recreated in pixel art form',
  //   tags: 'Photoshop',
  //   date: '20090103T120854',
  //   thumb: blogPixelLoungeThumb,
  //   full: '../../assets/images/pixel_lounge_01.jpg',
  //   url: 'https://charlesd.co.nz/pixellounge/pixel_lounge_01.gif',
  // },
];
const Blog = () => {
  return <BlogList blogList={blogList} />;
};

export default Blog;

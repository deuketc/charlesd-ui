import Hero from '../../components/Sections/Hero/Hero';
import CopySection from '../../components/Sections/CopySection/CopySection';
import ResponsiveSlider from '../../components/Sections/ResponsiveSlider/ResponsiveSlider';
import Mobile from '../../components/Sections/Mobile/Mobile';
import Video from '../../components/Sections/Video/Video';
import SingleImage from '../../components/Sections/SingleImage/SingleImage';
import NextProject from '../../components/Sections/NextProject/NextProject';

import heroImage from '../../assets/projects/unichem/hero-unichem.jpg';

import sliderMobileImage from '../../assets/projects/unichem/screenshot-unichem-mobile.png';
import sliderTabletImage from '../../assets/projects/unichem/screenshot-unichem-tablet.png';
import sliderDesktopImage from '../../assets/projects/unichem/screenshot-unichem-desktop.png';

import screenhotImage from '../../assets/projects/unichem/unichem-article-1440.jpg';

import mobile01 from '../../assets/projects/unichem/unichem-mobile-nav-01.jpg';
import mobile02 from '../../assets/projects/unichem/unichem-mobile-nav-02.jpg';
import mobile03 from '../../assets/projects/unichem/unichem-mobile-nav-03.jpg';

const mySingleImage = {
  name: 'Unichem Image',
  mobileSrc: screenhotImage,
  tabletSrc: screenhotImage,
  desktopSrc: screenhotImage,
};

const sliderImages = [
  { src: sliderMobileImage, screenSize: 'mobile' },
  { src: sliderTabletImage, screenSize: 'tablet' },
  { src: sliderDesktopImage, screenSize: 'desktop' },
];

const mobileShowcase = [mobile01, mobile02, mobile03];

const UnichemPage = () => {
  return (
    <>
      <Hero
        title="Unichem"
        copy="Our team developed a CMS driven website for Unichem, a network of more than 250 pharmacies throughout New Zealand."
        imgSrc={heroImage}
      />
      <CopySection
        title="Lorem ipsum dolor sit"
        body="Nunc accumsan libero felis, vel imperdiet enim condimentum vulputate. In tristique libero ac egestas semper. Nam vel ante consectetur eros aliquet mattis."
        backgroundColor="#f2f2f2"
      />
      <ResponsiveSlider images={sliderImages} />
      <CopySection
        title="Google maps integration"
        body="Nunc accumsan libero felis, vel imperdiet enim condimentum vulputate. In tristique libero ac egestas semper. Nam vel ante consectetur eros aliquet mattis."
      />
      <Mobile images={mobileShowcase} />
      <CopySection
        backgroundColor="#4f5565"
        color="#fff"
        title="A wealth of knowledge"
        body="Unichems website was built to support many different forms of content including articles, product information, locations and interactive brochures."
      />
      <Video
        src={
          'https://player.vimeo.com/video/355039310?autoplay=1&loop=1&autopause=0'
        }
        backgroundColor="#4f5565"
      />
      <CopySection
        title="CMS driven content"
        body="The Unichem websites content including images, video and copy is managed through a custom CMS with easy to use flexible templates."
        backgroundColor="#f2f2f2"
      />
      <SingleImage image={mySingleImage} backgroundColor="#f2f2f2" />
      <NextProject
        copy="Deserunt fugiat enim culpa eiusmod. Cillum consectetur veniam esse
          dolor ea dolore adipisicing in dolore sint eiusmod. Labore ea esse
          eiusmod aliqua."
        header="Want to see another project?"
        url="/projects/udc"
      />
    </>
  );
};

export default UnichemPage;

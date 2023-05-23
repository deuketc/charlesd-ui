import Hero from '../../components/Sections/Hero/Hero';
import CopySection from '../../components/Sections/CopySection/CopySection';
import Mobile from '../../components/Sections/Mobile/Mobile';
import SingleImage from '../../components/Sections/SingleImage/SingleImage';
import ResponsiveSlider from '../../components/Sections/ResponsiveSlider/ResponsiveSlider';
import ImageSlider from '../../components/Sections/ImageSlider/ImageSlider';
import NextProject from '../../components/Sections/NextProject/NextProject';
import IagHero from '../../components/Sections/IagHero/IagHero';

import heroImage from '../../assets/projects/iag/hero-iag.jpg';

import mobile01 from '../../assets/projects/iag/mobile-01.jpg';
import mobile02 from '../../assets/projects/iag/mobile-02.jpg';
import mobile03 from '../../assets/projects/iag/mobile-03.jpg';
import Video from '../../components/Sections/Video/Video';

import sliderMobileImage from '../../assets/projects/iag/iag-claims-ami-mobile.png';
import sliderTabletImage from '../../assets/projects/iag/iag-claims-ami-tablet.png';
import sliderDesktopImage from '../../assets/projects/iag/iag-claims-ami-desktop.png';

const responsiveSliderImages = [
  { src: sliderMobileImage, screenSize: 'mobile' },
  { src: sliderTabletImage, screenSize: 'tablet' },
  { src: sliderDesktopImage, screenSize: 'desktop' },
];

import screenhotImage from '../../assets/projects/iag/screenshot-disaster_hub-state-desktop.png';

import sliderImageEmail01 from '../../assets/projects/iag/email-state-light.jpg';
import sliderImageEmail02 from '../../assets/projects/iag/email-state-dark.jpg';
import IagDeveloper from '../../components/Sections/IagDeveloper/IagDeveloper';

const sliderImagesEmail = [sliderImageEmail01, sliderImageEmail02];

const mySingleImage = {
  name: 'Disaster hHb Image',
  mobileSrc: screenhotImage,
  tabletSrc: screenhotImage,
  desktopSrc: screenhotImage,
};

const mobileShowcase = [mobile01, mobile02, mobile03];

const IagPage = () => {
  return (
    <>
      <Hero
        title="Making the world a safer place"
        copy={'Full-time front-end engineer role'}
        heroComponent={<IagHero />}
      />
      <IagDeveloper />
      <CopySection
        title="Claims Applications"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem urna, sagittis et justo et, sodales posuere eros."
        backgroundColor="#f2f2f2"
      />
      <ResponsiveSlider images={responsiveSliderImages} />
      <CopySection
        title="Disaster Claims Hub"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem urna, sagittis et justo et, sodales posuere eros."
        backgroundColor="#fff"
      />
      <SingleImage image={mySingleImage} backgroundColor="#ffffff" />
      <CopySection
        title="Disaster Claims Hub"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem urna, sagittis et justo et, sodales posuere eros."
        backgroundColor="#f2f2f2"
      />
      <Mobile images={mobileShowcase} backgroundColor="#f2f2f2" />
      <CopySection
        title="What are the odds?"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem urna, sagittis et justo et, sodales posuere eros."
        backgroundColor="#fff"
      />
      <Video
        src="https://player.vimeo.com/video/355045208?autoplay=1&loop=1&autopause=0"
        backgroundColor="#fff"
      />
      <CopySection
        title="Responsive emails"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem urna, sagittis et justo et, sodales posuere eros."
        backgroundColor="#f2f2f2"
      />
      <ImageSlider images={sliderImagesEmail} backgroundColor="#f2f2f2" />
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

export default IagPage;

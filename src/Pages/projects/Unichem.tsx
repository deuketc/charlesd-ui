import Hero from '../../components/Sections/Hero/Hero';
import CopySection from '../../components/Sections/CopySection/CopySection';
import ResponsiveSlider from '../../components/Sections/ResponsiveSlider/ResponsiveSlider';
import Mobile from '../../components/Sections/Mobile/Mobile';
import Video from '../../components/Sections/Video/Video';
import SingleImage from '../../components/Sections/SingleImage/SingleImage';
import NextProject from '../../components/Sections/NextProject/NextProject';
import useImagesPreloader from '../../hooks/UseImagesPreloader';
import Spinner from '../../components/layout/Spinner/Spinner';

import heroImage from '../../assets/projects/unichem/hero-unichem.jpg';

import sliderMobileImage from '../../assets/projects/unichem/screenshot-unichem-mobile.png';
import sliderTabletImage from '../../assets/projects/unichem/screenshot-unichem-tablet.png';
import sliderDesktopImage from '../../assets/projects/unichem/screenshot-unichem-desktop.png';

import screenhotImage from '../../assets/projects/unichem/unichem-article-1440.jpg';
import screenhotImageTablet from '../../assets/projects/unichem/unichem-article-768.png';
import screenhotImageMobile from '../../assets/projects/unichem/unichem-article-460.png';

import mobile01 from '../../assets/projects/unichem/unichem-mobile-nav-02.jpg';
import mobile02 from '../../assets/projects/unichem/unichem-mobile-nav-01.jpg';
import mobile03 from '../../assets/projects/unichem/unichem-mobile-nav-03.jpg';

const mySingleImage = {
  name: 'Unichem Image',
  mobileSrc: screenhotImageMobile,
  tabletSrc: screenhotImageTablet,
  desktopSrc: screenhotImage,
};
const sliderImages = [sliderMobileImage, sliderTabletImage, sliderDesktopImage];
const mobileShowcase = [mobile01, mobile02, mobile03];

const unichemPageImages = [
  mobile01,
  mobile02,
  mobile03,
  sliderMobileImage,
  sliderTabletImage,
  sliderDesktopImage,
  screenhotImageMobile,
  screenhotImageTablet,
  screenhotImage,
];

const UnichemPage = () => {
  const imgsLoaded = useImagesPreloader(unichemPageImages);

  return imgsLoaded ? (
    <>
      <Hero
        title="Unichem"
        copy="A network of more than 250 pharmacies throughout New Zealand."
        imgSrc={heroImage}
        url="https://unichem.co.nz"
      />
      <CopySection
        paddingTop={true}
        title="Our team built..."
        body="A customised content managed website, with a fully responsive UI."
        backgroundColor="#f2f2f2"
      />
      <ResponsiveSlider images={sliderImages} />
      <CopySection
        paddingTop={true}
        title="Google maps integration"
        body="Find a Unichem in your area easily with our customized storefinder."
      />
      <Mobile images={mobileShowcase} />
      <CopySection
        paddingTop={true}
        backgroundColor="#4f5565"
        color="#fff"
        title="A wealth of knowledge"
        body="Hosts many different forms of content including articles, product information, locations and interactive brochures."
      />
      <Video
        src={
          'https://player.vimeo.com/video/355039310?autoplay=1&loop=1&autopause=0'
        }
        backgroundColor="#4f5565"
      />
      <CopySection
        paddingTop={true}
        title="Edit all your content"
        body="Content including images, video and copy is managed through a custom content management CMS."
        backgroundColor="#f2f2f2"
      />
      <SingleImage image={mySingleImage} backgroundColor="#f2f2f2" />
      <NextProject
        header="I built the Unichem UI during my time at Touchpoint."
        copy="Want to know more about the projects I worked on during my time at Touchpoint Group?"
        btnLabel="Touchpoint casestudy"
        btnUrl="/projects/touchpoint"
      />
    </>
  ) : (
    <Spinner />
  );
};

export default UnichemPage;

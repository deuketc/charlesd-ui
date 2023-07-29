import Hero from '../../components/Sections/Hero/Hero';
import CopySection from '../../components/Sections/CopySection/CopySection';
import ResponsiveSlider from '../../components/Sections/ResponsiveSlider/ResponsiveSlider';
import Mobile from '../../components/Sections/Mobile/Mobile';
import SingleImage from '../../components/Sections/SingleImage/SingleImage';
import NextProject from '../../components/Sections/NextProject/NextProject';
import ImageSlider from '../../components/Sections/ImageSlider/ImageSlider';
import useImagesPreloader from '../../hooks/UseImagesPreloader';
import Spinner from '../../components/layout/Spinner/Spinner';

import heroImage from '../../assets/projects/udc/hero-udc.jpg';
import sliderMobileImage from '../../assets/projects/udc/udc-screenshot-mobile.png';
import sliderTabletImage from '../../assets/projects/udc/udc-screenshot-tablet.png';
import sliderDesktopImage from '../../assets/projects/udc/udc-screenshot-desktop.png';
import sliderImage01 from '../../assets/projects/udc/screenshot-udc-calc-02.jpg';
import sliderImage02 from '../../assets/projects/udc/screenshot-udc-calc-03.jpg';
import screenhotImageDesktop from '../../assets/projects/udc/udc-capitaldrawdown-1440.png';
import screenhotImageTablet from '../../assets/projects/udc/udc-capitaldrawdown-768.png'
import screenhotImageMobile from '../../assets/projects/udc/udc-capitaldrawdown-360.png'
import mobile01 from '../../assets/projects/udc/udc-mobile-nav-01.png';
import mobile02 from '../../assets/projects/udc/udc-mobile-nav-02.png';
import mobile03 from '../../assets/projects/udc/udc-mobile-nav-03.png';

const responsiveSliderImages = [sliderMobileImage, sliderTabletImage, sliderDesktopImage];
const mobileShowcase = [mobile01, mobile02, mobile03];
const sliderImages = [sliderImage01, sliderImage02];
const mySingleImage = {
  name: 'UDC Image',
  mobileSrc: screenhotImageMobile,
  tabletSrc: screenhotImageTablet,
  desktopSrc: screenhotImageDesktop,
};

const udcPageImages = [
  heroImage,
  sliderMobileImage, 
  sliderTabletImage, 
  sliderDesktopImage, 
  mobile01, 
  mobile02,
  mobile03, 
  sliderImage01, 
  sliderImage02,
  screenhotImageMobile,
  screenhotImageTablet,
  screenhotImageDesktop
]

const UdcPage = () => {
  const imgsLoaded = useImagesPreloader(udcPageImages);

  return imgsLoaded ? (
    <>
      <Hero
        title="UDC"
        copy="Providing asset-based finance to New&nbsp;Zealand businesses"
        imgSrc={heroImage}
        url='https://udc.co.nz'
      />
      <CopySection
        paddingTop={true}
        title="Our team developed..."
        body="A responsive, pixel perfect front-end enabling customers to easily access information."
        backgroundColor="#f2f2f2"
      />
      <ResponsiveSlider images={responsiveSliderImages} />
      <CopySection
        paddingTop={true}
        title="Device optimized"
        body="Accessible to all devices, supports legacy browsers including ie8+ without compromise."
        backgroundColor="#fff"
      />
      <Mobile images={mobileShowcase} />
      <CopySection
        paddingTop={true}
        title="Custom loan comparison calulator"
        body="A custom calculator enables customers to compare a variety of loans easily from any device."
        backgroundColor="#eff7fa"
      />
      <ImageSlider images={sliderImages} backgroundColor="#eff7fa" />
      <CopySection
        paddingTop={true}
        title="Managed Content"
        body="Content including images, video and copy is updated through a custom content management system."
        backgroundColor="#f2f2f2"
      />
      <SingleImage image={mySingleImage} backgroundColor={'#f2f2f2'} />
      <NextProject
        copy="A promotional microsite built for State Insurance and Flybuys, learn more?"
        header="Want to know the odds?"
        btnUrl="/projects/wato"
        btnLabel='WATO casestudy'
      />
    </>
  ) : (
    <Spinner />
  );
};

export default UdcPage;

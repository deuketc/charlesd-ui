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
import screenhotImageTablet from '../../assets/projects/udc/udc-capitaldrawdown-768.png';
import screenhotImageMobile from '../../assets/projects/udc/udc-capitaldrawdown-360.png';
import mobile01 from '../../assets/projects/udc/udc-mobile-nav-01.png';
import mobile02 from '../../assets/projects/udc/udc-mobile-nav-02.png';
import mobile03 from '../../assets/projects/udc/udc-mobile-nav-03.png';
import UdcHero from '../../components/Sections/UdcHero/UdcHero';

import SectionWrapper from '../../components/Sections/SectionWrapper/SectionWrapper';
import SectionHeader from '../../components/Sections/SectionHeader/SectionHeader';
import SectionCopy from '../../components/Sections/SectionCopy/SectionCopy';
import BtnSection from '../../components/Sections/BtnSection/BtnSection';
import UdcHeroFixed from '../../components/Sections/UdcHeroFixed/UdcHeroFixed';

const responsiveSliderImages = [
  sliderMobileImage,
  sliderTabletImage,
  sliderDesktopImage,
];
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
  screenhotImageDesktop,
];

const UdcPage = () => {
  const imgsLoaded = useImagesPreloader(udcPageImages);

  return imgsLoaded ? (
    <>
      <UdcHero />
      <SectionWrapper
        backgroundColor="#1a1a1a"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
      >
        <SectionHeader
          style="L4"
          color="#fff"
          h1="A fully custom front-end UI for UDC, integrated with an in-house CMS to support flexible content management."
        />
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#f2f2f2"
        paddingTop={true}
        paddingBottom={false}
        width="90%"
        maxWidth="110rem"
        align="left"
      >
        <SectionHeader
          textAlign="left"
          style="L3"
          color="#000"
          h2="Our team developed..."
        />
        <SectionCopy textAlign="left">
          <p>
            A responsive, pixel perfect front-end enabling customers to easily
            access information.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <ResponsiveSlider
        imageHeights={[-450, -628, -810]}
        images={responsiveSliderImages}
      />

      <SectionWrapper
        backgroundColor="#fff"
        paddingTop={true}
        paddingBottom={false}
        width="90%"
        maxWidth="110rem"
        align="center"
      >
        <SectionHeader
          textAlign="center"
          style="L3"
          color="#000"
          h2="Device optimized"
        />
        <SectionCopy textAlign="center">
          <p>
            Accessible to all devices, supports legacy browsers including ie8+
            without compromise.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <Mobile images={mobileShowcase} />

      <UdcHeroFixed />

      <SectionWrapper
        backgroundColor="#eff7fa"
        paddingTop={true}
        paddingBottom={false}
        width="90%"
        maxWidth="110rem"
        align="left"
      >
        <SectionHeader
          textAlign="left"
          style="L3"
          color="#000"
          h2="Custom loan comparison calulator"
        />
        <SectionCopy textAlign="left">
          <p>
            A custom calculator enables customers to compare a variety of loans
            easily from any device.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <ImageSlider images={sliderImages} backgroundColor="#eff7fa" />

      <SectionWrapper
        backgroundColor="#f2f2f2"
        paddingTop={true}
        paddingBottom={false}
        width="90%"
        maxWidth="110rem"
        align="right"
      >
        <SectionHeader
          textAlign="right"
          style="L3"
          color="#000000"
          h2="Keep your content up to date"
        />
        <SectionCopy textColor="#000000" textAlign="right">
          <p>
            Content including images, video and copy is managed through a custom
            content management CMS.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <SingleImage image={mySingleImage} backgroundColor={'#f2f2f2'} />

      <SectionWrapper
        backgroundColor="#ffffff"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
        align="center"
        maxWidth="110rem"
      >
        <SectionHeader
          textAlign="center"
          style="L3"
          color="#000"
          h2="Want to know the odds?"
        />
        <SectionCopy textAlign="center">
          <p>
            A promotional microsite built for State Insurance and Flybuys, learn
            more?
          </p>
        </SectionCopy>
        <BtnSection
          buttons={[
            { label: 'WATO casestudy', url: '/projects/wato' },
            { label: 'All Projects', url: '/projects' },
          ]}
        />
      </SectionWrapper>
    </>
  ) : (
    <Spinner />
  );
};

export default UdcPage;

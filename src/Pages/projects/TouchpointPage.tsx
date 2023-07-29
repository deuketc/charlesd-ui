import CopySection from '../../components/Sections/CopySection/CopySection';
import Hero from '../../components/Sections/Hero/Hero';
import SingleParallaxImage from '../../components/Sections/SingleParallaxImage/SingleParallaxImage';
import Mobile from '../../components/Sections/Mobile/Mobile';
import LogosTiled from '../../components/Sections/LogosTiled/LogosTiled';
import Video from '../../components/Sections/Video/Video';
import SingleImage from '../../components/Sections/SingleImage/SingleImage';
import NextProject from '../../components/Sections/NextProject/NextProject';
import useImagesPreloader from '../../hooks/UseImagesPreloader';
import Spinner from '../../components/layout/Spinner/Spinner';

import heroImage from '../../assets/projects/touchpoint/hero-touchpoint.jpg';
import screenhotImageDesktop from '../../assets/projects/touchpoint/touchpoint-screenshot-desktop.jpg';
import screenhotImageTablet from '../../assets/projects/touchpoint/touchpoint-screenshot-tablet.jpg';
import screenhotImageMobile from '../../assets/projects/touchpoint/touchpoint-screenshot-mobile.jpg';
import mobile01 from '../../assets/projects/touchpoint/screenshot-touchpoint-mobile-cx.jpg';
import mobile02 from '../../assets/projects/touchpoint/screenshot-touchpoint-mobile-ip.jpg';
import mobile03 from '../../assets/projects/touchpoint/screenshot-touchpoint-mobile-mx.jpg';
import logoHarmony from '../../assets/projects/touchpoint/logo-harmoney.jpg';
import logoKingsplantbarn from '../../assets/projects/touchpoint/logo-kingsplantbarn.jpg';
import logoSamsung from '../../assets/projects/touchpoint/logo-samsung.jpg';
import logoUDC from '../../assets/projects/touchpoint/logo-udc.jpg';
import logoUnichem from '../../assets/projects/touchpoint/logo-unichem.jpg';
import logoSpark from '../../assets/projects/touchpoint/logo-spark.jpg';
import logoMercury from '../../assets/projects/touchpoint/logo-mercury.jpg';
import logoLion from '../../assets/projects/touchpoint/logo-lion.jpg';
import logoAA from '../../assets/projects/touchpoint/logo-aa.jpg';
import logoHuawei from '../../assets/projects/touchpoint/logo-huawei.jpg';
import logoFreedom from '../../assets/projects/touchpoint/logo-freedom.jpg';
import logoASB from '../../assets/projects/touchpoint/logo-asb.jpg';

const logos = [
  logoHarmony,
  logoKingsplantbarn,
  logoSamsung,
  logoUDC,
  logoUnichem,
  logoSpark,
  logoMercury,
  logoLion,
  logoAA,
  logoHuawei,
  logoFreedom,
  logoASB,
];

import anzHeroImage from '../../assets/projects/touchpoint/hero-anz.jpg';

const mySingleImage = {
  name: 'Touchpoint Image',
  mobileSrc: screenhotImageMobile,
  tabletSrc: screenhotImageTablet,
  desktopSrc: screenhotImageDesktop,
};

const mobileShowcase = [mobile01, mobile02, mobile03];

const touchpointPageImages = [
  heroImage,
  logoHarmony,
  logoKingsplantbarn,
  logoSamsung,
  logoUDC,
  logoUnichem,
  logoSpark,
  logoMercury,
  logoLion,
  logoAA,
  logoHuawei,
  logoFreedom,
  logoASB,
  screenhotImageDesktop,
  screenhotImageTablet,
  screenhotImageMobile,
  mobile01, 
  mobile02, 
  mobile03
]

const TouchpointPage = () => {
  const imgsLoaded = useImagesPreloader(touchpointPageImages);
  return imgsLoaded ? (
    <>
      <Hero
        title="Touchpoint Group"
        copy="Enterprise software and services for superior customer engagement."
        imgSrc={heroImage}
        url='https://touchpoint.co.nz'
      />
      <CopySection
        paddingTop={true}
        title="Front-end Development"
        body="During my time at Touchpoint I helped develop the following 3 products"
        backgroundColor="#f2f2f2"
      />
      <Mobile images={mobileShowcase} backgroundColor="#f2f2f2" />
      <CopySection
        paddingTop={true}
        title="Working Together"
        body="As a front-end developer, I was fortunate to work with the following brands."
        backgroundColor="#ffffff"
      />
      <LogosTiled logos={logos} />
      <SingleParallaxImage
        scrollTriggerAni={true}
        deviceWidth={true}
        image={anzHeroImage}
        backgroundColor="#f2f2f2"
      />
      <CopySection
        paddingTop={true}
        title="More experts in more places"
        body="See below the UI adapt to all possible dimensions. A part of our appraoch to customized responsive UI's"
        backgroundColor="#fff"
      />
      <Video
        src={
          'https://player.vimeo.com/video/355046363?autoplay=1&loop=1&autopause=0'
        }
        backgroundColor="#fff"
      />
      <CopySection
        paddingTop={true}
        title="Innovation"
        body='For my work on responsive email development, I received Touchpoint Group&rsquo;s innovation award. Check out my code on <a href="https://github.com/deuketc/edm-desktop-first">Github</a>.'
        backgroundColor="#f2f2f2"
      />
      <SingleImage image={mySingleImage} backgroundColor="#f2f2f2" />
      <NextProject
        copy="Providing asset-based finance to New Zealand businesses, want to know more?"
        header="Touchpoint group introduced me to UDC."
        btnUrl="/projects/udc"
        btnLabel="UDC casestudy"
      />
    </>
  ) : (
    <Spinner />
  );
};

export default TouchpointPage;

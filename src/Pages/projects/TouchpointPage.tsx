import CopySection from '../../components/Sections/CopySection/CopySection';
import Hero from '../../components/Sections/Hero/Hero';
import SingleParallaxImage from '../../components/Sections/SingleParallaxImage/SingleParallaxImage';
import Mobile from '../../components/Sections/Mobile/Mobile';
import LogosTiled from '../../components/Sections/LogosTiled/LogosTiled';
import Video from '../../components/Sections/Video/Video';
import SingleImage from '../../components/Sections/SingleImage/SingleImage';
import NextProject from '../../components/Sections/NextProject/NextProject';

import heroImage from '../../assets/projects/touchpoint/hero-touchpoint.jpg';

import screenhotImage from '../../assets/projects/touchpoint/screenshot-touchpoint-desktop-01.jpg';

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
  mobileSrc: screenhotImage,
  tabletSrc: screenhotImage,
  desktopSrc: screenhotImage,
};

const mobileShowcase = [mobile01, mobile02, mobile03];

const TouchpointPage = () => {
  return (
    <>
      <Hero
        title="Touchpoint Group"
        copy="Enterprise software and services for superior customer engagement."
        imgSrc={heroImage}
      />

      <CopySection
        title="Front-end Development"
        body="During my time at Touchpoint I worked helped develop the following 3 products"
        backgroundColor="#f2f2f2"
      />
      <Mobile images={mobileShowcase} backgroundColor="#f2f2f2" />
      <CopySection
        title="Working Together"
        body="As a front-end developer working with Touchpoint Group, I was fortunate to work with the following brands."
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
        title="More experts in more places"
        body="write some stuff about ANZ."
        backgroundColor="#fff"
      />
      <Video
        src={
          'https://player.vimeo.com/video/355046363?autoplay=1&loop=1&autopause=0'
        }
        backgroundColor="#fff"
      />
      <CopySection
        title="Innovation"
        body='For my work on responsive email campaigns I received Touchpoint Group’s innovation award. Check out my most recent email code for responsive emails on my <a href="https://github.com/deuketc/edm-desktop-first">Github</a> page.'
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

export default TouchpointPage;

import Hero from '../../components/Sections/Hero/Hero';
import CopySection from '../../components/Sections/CopySection/CopySection';
import SingleImage from '../../components/Sections/SingleImage/SingleImage';
import Mobile from '../../components/Sections/Mobile/Mobile';
import Spinner from '../../components/layout/Spinner/Spinner';
import useImagesPreloader from '../../hooks/UseImagesPreloader';
import Video from '../../components/Sections/Video/Video';
import SingleParallaxImage from '../../components/Sections/SingleParallaxImage/SingleParallaxImage';
import NextProject from '../../components/Sections/NextProject/NextProject';

import heroImage from '../../assets/projects/wato/hero-wato2.jpg';
import screenhotImageDesktop from '../../assets/projects/wato/desktop.jpg';
import screenhotImageTablet from '../../assets/projects/wato/tablet.jpg';
import screenhotImageMobile from '../../assets/projects/wato/mobile.jpg';
import mobile01 from '../../assets/projects/wato/mobile-02.jpg';
import mobile02 from '../../assets/projects/wato/mobile-01.jpg';
import mobile03 from '../../assets/projects/wato/mobile-03.jpg';
import watoCityImage from '../../assets/projects/wato/state-wato-promo03.jpg';

const mySingleImage = {
  name: 'Wato Image',
  mobileSrc: screenhotImageMobile,
  tabletSrc: screenhotImageTablet,
  desktopSrc: screenhotImageDesktop,
};

const mobileShowcase = [mobile01, mobile02, mobile03];

const watoPageImages = [
  heroImage,
  screenhotImageMobile,
  screenhotImageMobile,
  screenhotImageDesktop,
  mobile01, 
  mobile02, 
  mobile03,
  watoCityImage
]

const WatoPage = () => {
  const imgsLoaded = useImagesPreloader(watoPageImages);

  return imgsLoaded ? (
    <>
      <Hero
        title="What are the odds?"
        copy="A promotional microsite built for State Insurance and Flybuys."
        imgSrc={heroImage}
        url="https://charlesd.co.nz/wato"
      />
      <CopySection
        paddingTop={true}
        title="A chance to win."
        body="Earning customers the chance to win 30,000 Flybuys points each day for the month of April 2018."
        backgroundColor="#f2f2f2"
      />
      <SingleImage image={mySingleImage} backgroundColor="#f2f2f2" />
      <CopySection
        paddingTop={true}
        title="Device compatibility"
        body="As the front-end developer for the project my objective was to deliver a consistent experience to both desktop and mobile."
      />
      <Mobile images={mobileShowcase} />
      <CopySection
        paddingTop={true}
        title="Animation with JavaScript"
        body="Accomplished with responsive web development and the JavaScript animation library GreenSock."
        backgroundColor="#f2f2f2"
      />
      <Video
        src="https://player.vimeo.com/video/355045208?autoplay=1&loop=1&autopause=0"
        backgroundColor="#f2f2f2"
      />
      <CopySection
        paddingTop={true}
        paddingBottom={true}
        title="How did it go?"
        body="The website was interacted with by over 10,000 unique visitors and hundreds of winners."
      />
      <SingleParallaxImage
        image={watoCityImage}
        scrollTriggerAni={true}
        backgroundColor="#ffffff"
      />
      <NextProject
        backgroundColor="#ffffff"
        header="The above project was built during my time at IAG Insurance."
        copy="Learn about my role and other projects I've worked on as a Developer?"
        btnLabel='IAG casestudy'
        btnUrl="/projects/iag"
      />
    </>
  ) : (
    <Spinner />
  );
};

export default WatoPage;

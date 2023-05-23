import Hero from '../../components/Sections/Hero/Hero';

import heroImage from '../../assets/projects/wato/hero-wato.jpg';
import CopySection from '../../components/Sections/CopySection/CopySection';
import SingleImage from '../../components/Sections/SingleImage/SingleImage';

import screenhotImage from '../../assets/projects/wato/desktop-02.jpg';
import Mobile from '../../components/Sections/Mobile/Mobile';

import mobile01 from '../../assets/projects/wato/mobile-01.jpg';
import mobile02 from '../../assets/projects/wato/mobile-02.jpg';
import mobile03 from '../../assets/projects/wato/mobile-03.jpg';

import watoCityImage from '../../assets/projects/wato/state-wato-promo03.jpg';

import Video from '../../components/Sections/Video/Video';

import SingleParallaxImage from '../../components/Sections/SingleParallaxImage/SingleParallaxImage';
import NextProject from '../../components/Sections/NextProject/NextProject';

const mySingleImage = {
  name: 'Wato Image',
  mobileSrc: screenhotImage,
  tabletSrc: screenhotImage,
  desktopSrc: screenhotImage,
};

const mobileShowcase = [mobile01, mobile02, mobile03];

const WatoPage = () => {
  return (
    <>
      <Hero
        title="What are the odds?"
        copy="What are the odds is an promotional microsite built for State Insurance and Flybuys."
        imgSrc={heroImage}
      />
      <CopySection
        title="Engaging UX"
        body="The campaign promoted the purchase of policies by earning customers the chance to win 30,000 Flybuys points each day for the month of April 2018."
        backgroundColor="#f2f2f2"
      />
      <SingleImage image={mySingleImage} backgroundColor="#f2f2f2" />
      <CopySection
        title="Device compatibility"
        body="As the front-end developer for the project my objective was to deliver a consistent experience to both desktop and mobile. This was accomplished using responsive web development and the JavaScript animation library GreenSock."
      />
      <Mobile images={mobileShowcase} />
      <CopySection
        title="Animation with JavaScript"
        body="Overcoming challenges such as differences in mobile and desktop layout was accomplished by creating the timeline dynamically whenever a screen size change was detected."
        backgroundColor="#f2f2f2"
      />
      <Video
        src="https://player.vimeo.com/video/355045208?autoplay=1&loop=1&autopause=0"
        backgroundColor="#f2f2f2"
      />
      <CopySection
        title="Scale"
        body="Overcoming challenges such as differences in mobile and desktop layout was accomplished by creating the timeline dynamically whenever a screen size change was detected."
      />
      <SingleParallaxImage
        image={watoCityImage}
        scrollTriggerAni={true}
        backgroundColor="#ffffff"
      />
      <NextProject
        backgroundColor="#ffffff"
        copy="Deserunt fugiat enim culpa eiusmod. Cillum consectetur veniam esse
          dolor ea dolore adipisicing in dolore sint eiusmod. Labore ea esse
          eiusmod aliqua."
        header="Want to see another project?"
        url="/projects/udc"
      />
    </>
  );
};

export default WatoPage;

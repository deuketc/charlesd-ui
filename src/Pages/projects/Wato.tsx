import Hero from '../../components/Sections/Hero/Hero';
import CopySection from '../../components/Sections/CopySection/CopySection';
import SingleImage from '../../components/Sections/SingleImage/SingleImage';
import Mobile from '../../components/Sections/Mobile/Mobile';
import Spinner from '../../components/layout/Spinner/Spinner';
import useImagesPreloader from '../../hooks/UseImagesPreloader';
import Video from '../../components/Sections/Video/Video';
import SingleParallaxImage from '../../components/Sections/SingleParallaxImage/SingleParallaxImage';
import NextProject from '../../components/Sections/NextProject/NextProject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import heroImage from '../../assets/projects/wato/hero-wato2.jpg';
import screenhotImageDesktop from '../../assets/projects/wato/desktop.jpg';
import screenhotImageTablet from '../../assets/projects/wato/tablet.jpg';
import screenhotImageMobile from '../../assets/projects/wato/mobile.jpg';
import mobile01 from '../../assets/projects/wato/mobile-02.jpg';
import mobile02 from '../../assets/projects/wato/mobile-01.jpg';
import mobile03 from '../../assets/projects/wato/mobile-03.jpg';
import watoCityImage from '../../assets/projects/wato/state-wato-promo03.jpg';

import SectionWrapper from '../../components/Sections/SectionWrapper/SectionWrapper';
import SectionHeader from '../../components/Sections/SectionHeader/SectionHeader';
import SectionCopy from '../../components/Sections/SectionCopy/SectionCopy';
import BtnSection from '../../components/Sections/BtnSection/BtnSection';

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
  watoCityImage,
];

const WatoPage = () => {
  const imgsLoaded = useImagesPreloader(watoPageImages);

  return imgsLoaded ? (
    <>
      {/* <Hero
        title="What are the odds?"
        copy="A promotional microsite built for State Insurance and Flybuys."
        imgSrc={heroImage}
        url="https://deuketc.github.io/wato/"
      /> */}

      <SectionWrapper
        backgroundColor="#1a1a1a"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
      >
        <SectionHeader
          style="L4"
          color="#fff"
          h1='"What are the odds" is a promotional microsite built for State Insurance and Flybuys. Earning customers the chance to win 30,000 Flybuys points each day for the month of April 2018.'
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
          h2="A chance to win."
        />
        <SectionCopy textAlign="left">
          <p>
            An interactive microsite built with GSAP animation to promote a
            campaign for State Insurance and Flybuys.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <SingleImage image={mySingleImage} backgroundColor="#f2f2f2" />

      <SectionWrapper
        backgroundColor="#ffffff"
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
          h2="Device compatibility"
        />
        <SectionCopy textAlign="center">
          <p>
            As the front-end developer for the project my objective was to
            deliver a consistent experience to both desktop and mobile.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <Mobile images={mobileShowcase} />

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
          h2="Animation with JavaScript"
        />
        <SectionCopy textAlign="left">
          <p>
            Accomplished with responsive web development and the JavaScript
            animation library GSAP.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#f2f2f2"
        paddingTop={false}
        paddingBottom={true}
        width="90%"
        align="center"
      >
        <Video
          src="https://player.vimeo.com/video/355045208?autoplay=1&loop=1&autopause=0"
          backgroundColor="#f2f2f2"
        />
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#ffffff"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
        maxWidth="110rem"
        align="center"
      >
        <SectionHeader
          textAlign="center"
          style="L3"
          color="#000"
          h2="How did it go?"
        />
        <SectionCopy textAlign="center">
          <p>
            The website was interacted with by over 10,000 unique visitors and
            hundreds of winners.
          </p>
          <p>
            <a
              target="_blank"
              href="https://deuketc.github.io/wato/"
              className="btn btn--primary"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              &nbsp;&nbsp;&nbsp;Launch the WATO Experience
            </a>
          </p>
        </SectionCopy>
      </SectionWrapper>

      <SingleParallaxImage
        image={watoCityImage}
        scrollTriggerAni={true}
        backgroundColor="#ffffff"
      />

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
          h2="The above project was built during my time at IAG Insurance."
        />
        <SectionCopy textAlign="center">
          <p>
            Learn about my role and other projects I've worked on as a
            Developer?
          </p>
        </SectionCopy>
        <BtnSection
          buttons={[
            { label: 'IAG casestudy', url: '/projects/iag' },
            { label: 'All Projects', url: '/projects' },
          ]}
        />
      </SectionWrapper>
    </>
  ) : (
    <Spinner />
  );
};

export default WatoPage;

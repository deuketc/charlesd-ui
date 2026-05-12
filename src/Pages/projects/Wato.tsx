import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SingleImage from '../../components/Sections/SingleImage/SingleImage';
import Mobile from '../../components/Sections/Mobile/Mobile';
import Spinner from '../../components/layout/Spinner/Spinner';
import useImagesPreloader from '../../hooks/UseImagesPreloader';
import Video from '../../components/Sections/Video/Video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

import SectionWrapper from '../../components/Sections/SectionWrapper/SectionWrapper';
import SectionHeader from '../../components/Sections/SectionHeader/SectionHeader';
import SectionCopy from '../../components/Sections/SectionCopy/SectionCopy';
import BtnSection from '../../components/Sections/BtnSection/BtnSection';

import screenhotImageDesktop from '../../assets/projects/wato/desktop.jpg';
import screenhotImageTablet from '../../assets/projects/wato/tablet.jpg';
import screenhotImageMobile from '../../assets/projects/wato/mobile.jpg';

import mobile01 from '../../assets/projects/wato/mobile-02.jpg';
import mobile02 from '../../assets/projects/wato/mobile-01.jpg';
import mobile03 from '../../assets/projects/wato/mobile-03.jpg';
import SectionAlignment from '../../components/Sections/SectionAlignment/SectionAlignment';

const mySingleImage = {
  name: 'Wato Image',
  mobileSrc: screenhotImageMobile,
  tabletSrc: screenhotImageTablet,
  desktopSrc: screenhotImageDesktop,
};

const mobileShowcase = [mobile01, mobile02, mobile03];

const watoPageImages = [
  screenhotImageMobile,
  screenhotImageMobile,
  screenhotImageDesktop,
  mobile01,
  mobile02,
  mobile03,
];

const WatoPage = () => {
  const imgsLoaded = useImagesPreloader(watoPageImages);

  useLayoutEffect(() => {
    if (!imgsLoaded) return;
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(raf);
  }, [imgsLoaded]);

  return imgsLoaded ? (
    <>
      <SectionWrapper
        backgroundColor="#1a1a1a"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
      >
        <SectionHeader
          style="L3"
          color="#1a1a1a"
          h1="State - What are the odds?"
        />
        <SectionHeader
          style="L4"
          color="#fff"
          h2='"What are the odds" is a promotional microsite built for State Insurance and Flybuys. Earning customers the chance to win 30,000 Flybuys points each day for the month of April 2018.'
        />
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#f2f2f2"
        paddingTop={true}
        paddingBottom={false}
        width="90%"
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

        <SingleImage
          alignment="center"
          alt="WATO screenshot"
          image={mySingleImage}
          backgroundColor="#f2f2f2"
          onImageLoad={() => ScrollTrigger.refresh()}
        />
      </SectionWrapper>

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

        <Mobile images={mobileShowcase} />
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#f2f2f2"
        paddingTop={true}
        paddingBottom={false}
        align="center"
      >
        <SectionAlignment width="90%" maxWidth="110rem">
          <SectionHeader
            textAlign="center"
            style="L3"
            color="#000"
            h2="Animation with JavaScript"
          />
          <SectionCopy textAlign="center">
            <p>
              Accomplished with responsive web development and the JavaScript
              animation library GSAP.
            </p>
          </SectionCopy>
        </SectionAlignment>

        <Video
          src="https://player.vimeo.com/video/355045208?autoplay=1&loop=1&autopause=0"
          backgroundColor="#f2f2f2"
        />
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#f2f2f2"
        paddingTop={false}
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
              &nbsp;&nbsp;&nbsp;Launch WATO
            </a>
          </p>
        </SectionCopy>
      </SectionWrapper>

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

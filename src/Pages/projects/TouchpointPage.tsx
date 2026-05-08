import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionCopy from '../../components/Sections/SectionCopy/SectionCopy';
import SectionWrapper from '../../components/Sections/SectionWrapper/SectionWrapper';
import SectionHeader from '../../components/Sections/SectionHeader/SectionHeader';

import Mobile from '../../components/Sections/Mobile/Mobile';
import Video from '../../components/Sections/Video/Video';
import SingleImage from '../../components/Sections/SingleImage/SingleImage';
import useImagesPreloader from '../../hooks/UseImagesPreloader';
import Spinner from '../../components/layout/Spinner/Spinner';

gsap.registerPlugin(ScrollTrigger);
import BtnSection from '../../components/Sections/BtnSection/BtnSection';
import IpiphanyHero from '../../components/Sections/TouchpointHero/IpiphanyHero';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import screenhotImageDesktop from '../../assets/projects/touchpoint/touchpoint-screenshot-desktop.jpg';
import screenhotImageTablet from '../../assets/projects/touchpoint/touchpoint-screenshot-tablet.jpg';
import screenhotImageMobile from '../../assets/projects/touchpoint/touchpoint-screenshot-mobile.jpg';

import mobile01 from '../../assets/projects/touchpoint/screenshot-touchpoint-mobile-cx.jpg';
import mobile02 from '../../assets/projects/touchpoint/screenshot-touchpoint-mobile-ip.jpg';
import mobile03 from '../../assets/projects/touchpoint/screenshot-touchpoint-mobile-mx.jpg';

import Asb from '../../assets/projects/touchpoint/Asb';
import LogosHorizontalScroll from '../../components/Sections/LogosHorizontalScroll/LogosHorizontalScroll';
import Samsung from '../../assets/projects/touchpoint/Samsung';
import Unichem from '../../assets/projects/touchpoint/Unichem';
import Spark from '../../assets/projects/touchpoint/Spark';
import Mercury from '../../assets/projects/touchpoint/Mercury';
import Harmoney from '../../assets/projects/touchpoint/Harmoney';
import Freedom from '../../assets/projects/touchpoint/Freedom';
import UDC from '../../assets/projects/touchpoint/Udc';
import Huawei from '../../assets/projects/touchpoint/huawei';
import AA from '../../assets/projects/touchpoint/Aainsurance';
import Kingsplantbarn from '../../assets/projects/touchpoint/Kingsplantbarn';
import Lion from '../../assets/projects/touchpoint/Lion';

const logos = [<Samsung />, <Unichem />, <AA />, <Asb />, <Spark />, <Lion />];

const logos2 = [
  <UDC />,
  <Huawei />,
  <Kingsplantbarn />,
  <Mercury />,
  <Harmoney />,
  <Freedom />,
];

import AnzHero from '../../components/Sections/AnzHero/AnzHero';

const mySingleImage = {
  name: 'Touchpoint Image',
  mobileSrc: screenhotImageMobile,
  tabletSrc: screenhotImageTablet,
  desktopSrc: screenhotImageDesktop,
};

const mobileShowcase = [mobile01, mobile02, mobile03];

const touchpointPageImages = [
  screenhotImageDesktop,
  screenhotImageTablet,
  screenhotImageMobile,
  mobile01,
  mobile02,
  mobile03,
];

const TouchpointPage = () => {
  const imgsLoaded = useImagesPreloader(touchpointPageImages);

  useLayoutEffect(() => {
    if (!imgsLoaded) return;
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(raf);
  }, [imgsLoaded]);

  return imgsLoaded ? (
    <>
      <IpiphanyHero />

      <SectionWrapper
        backgroundColor="#1a1a1a"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
      >
        <SectionHeader style="hidden" color="#fff" h1="Touchpoint" />
        <SectionHeader
          style="L4"
          color="#fff"
          h2="Front-End Developer specialising in, UI and email systems, with a strong focus on building responsive, cross-client compatible email templates at scale."
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
          h2="Front-end Development"
        />
        <SectionCopy textAlign="left">
          <p>At Touchpoint, I helped develop these three products</p>
        </SectionCopy>
      </SectionWrapper>

      <Mobile images={mobileShowcase} backgroundColor="#f2f2f2" />

      <AnzHero />

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
          h2="More experts in more places"
        />
        <SectionCopy textAlign="center">
          <p>
            See below the UI adapt to all possible dimensions. A part of our
            approach to customized responsive UI's
          </p>
        </SectionCopy>

        <Video
          src={
            'https://player.vimeo.com/video/355046363?autoplay=1&loop=1&autopause=0'
          }
          backgroundColor="#fff"
        />
      </SectionWrapper>

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
          color="#000"
          h2="Trusted by"
        />
        <SectionCopy textAlign="right">
          <p>
            At Touchpoint, I partnered with a range of brands to deliver
            front-end and UI solutions.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#f2f2f2"
        paddingTop={false}
        paddingBottom={true}
        width="100%%"
        align="center"
      >
        <SectionHeader
          textAlign="center"
          style="hidden"
          color="#000"
          h2="Company logo images carousel"
        />
        <LogosHorizontalScroll images={logos} />
        <LogosHorizontalScroll direction="right" images={logos2} />
      </SectionWrapper>

      <SingleImage
        alt="Touchpoint Website Screenshot"
        image={mySingleImage}
        backgroundColor="#f2f2f2"
        onImageLoad={() => ScrollTrigger.refresh()}
      />

      <SectionWrapper
        backgroundColor="#f2f2f2"
        paddingTop={false}
        paddingBottom={true}
        width="90%"
        align="center"
        maxWidth="110rem"
      >
        <SectionHeader
          textAlign="center"
          style="L1"
          color="#000"
          h3="Visit the Touchpoint team (now Ipiphany)."
        />

        <SectionCopy textAlign="center">
          <a
            target="_blank"
            href="https://www.ipiphany.ai/"
            className="btn btn--primary"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            &nbsp;&nbsp;&nbsp;Visit the website
          </a>
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
          h2="Touchpoint group introduced me to UDC."
        />
        <SectionCopy textAlign="center">
          <p>
            Providing asset-based finance to New Zealand businesses, want to
            know more?
          </p>
        </SectionCopy>
        <BtnSection
          buttons={[
            { label: 'UDC casestudy', url: '/projects/udc' },
            { label: 'All Projects', url: '/projects' },
          ]}
        />
      </SectionWrapper>
    </>
  ) : (
    <Spinner />
  );
};

export default TouchpointPage;

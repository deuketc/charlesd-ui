import ResponsiveSlider from '../../components/Sections/ResponsiveSlider/ResponsiveSlider';
import Mobile from '../../components/Sections/Mobile/Mobile';
import Video from '../../components/Sections/Video/Video';
import SingleImage from '../../components/Sections/SingleImage/SingleImage';
import useImagesPreloader from '../../hooks/UseImagesPreloader';
import Spinner from '../../components/layout/Spinner/Spinner';

import heroImage from '../../assets/projects/unichem/hero-unichem.jpg';
import sliderMobileImage from '../../assets/projects/unichem/screenshot-unichem-mobile.jpg';
import sliderTabletImage from '../../assets/projects/unichem/screenshot-unichem-tablet.jpg';
import sliderDesktopImage from '../../assets/projects/unichem/screenshot-unichem-desktop.jpg';
import screenshotImage from '../../assets/projects/unichem/unichem-article-1440.jpg';
import screenshotImageTablet from '../../assets/projects/unichem/unichem-article-768.png';
import screenshotImageMobile from '../../assets/projects/unichem/unichem-article-460.png';
import mobile01 from '../../assets/projects/unichem/unichem-mobile-nav-02.jpg';
import mobile02 from '../../assets/projects/unichem/unichem-mobile-nav-01.jpg';
import mobile03 from '../../assets/projects/unichem/unichem-mobile-nav-03.jpg';

import SectionWrapper from '../../components/Sections/SectionWrapper/SectionWrapper';
import SectionHeader from '../../components/Sections/SectionHeader/SectionHeader';
import SectionCopy from '../../components/Sections/SectionCopy/SectionCopy';
import BtnSection from '../../components/Sections/BtnSection/BtnSection';

import UnichemHero from '../../components/Sections/UnichemHero/UnichemHero';

const mySingleImage = {
  name: 'Unichem Image',
  mobileSrc: screenshotImageMobile,
  tabletSrc: screenshotImageTablet,
  desktopSrc: screenshotImage,
};
const sliderImages = [sliderMobileImage, sliderTabletImage, sliderDesktopImage];
const mobileShowcase = [mobile01, mobile02, mobile03];

const unichemPageImages = [
  heroImage,
  mobile01,
  mobile02,
  mobile03,
  sliderMobileImage,
  sliderTabletImage,
  sliderDesktopImage,
  screenshotImageMobile,
  screenshotImageTablet,
  screenshotImage,
];

const UnichemPage = () => {
  const imgsLoaded = useImagesPreloader(unichemPageImages);

  return imgsLoaded ? (
    <>
      <UnichemHero />

      <SectionWrapper
        backgroundColor="#1a1a1a"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
      >
        <SectionHeader
          style="L4"
          color="#fff"
          h1="A fully custom, responsive front-end build for the Unichem website, supported by a CMS for flexible content management."
        />
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#f2f2f2"
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
          h2="Our team built"
        />
        <SectionCopy textAlign="center">
          <p>
            A customised content managed website, with a fully responsive UI.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <ResponsiveSlider
        images={sliderImages}
        imageHeights={[-1910, -1975, -1236]}
      />

      <SectionWrapper
        backgroundColor="#ffffff"
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
          h2="Google maps integration"
        />
        <SectionCopy textAlign="left">
          <p>
            Find a Unichem in your area easily with our customized storefinder.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <Mobile images={mobileShowcase} />

      <SectionWrapper
        backgroundColor="#4f5565"
        paddingTop={true}
        paddingBottom={false}
        width="90%"
        maxWidth="110rem"
        align="center"
      >
        <SectionHeader
          textAlign="center"
          style="L3"
          color="#fff"
          h2="A wealth of knowledge"
        />
        <SectionCopy textColor="#ffffff" textAlign="center">
          <p>
            Hosts many different forms of content including articles, product
            information, locations and interactive brochures.
          </p>
        </SectionCopy>
      </SectionWrapper>
      <SectionWrapper
        backgroundColor="#4f5565"
        paddingTop={false}
        paddingBottom={true}
        width="90%"
        maxWidth="110rem"
        align="center"
      >
        <Video
          src={
            'https://player.vimeo.com/video/355039310?autoplay=1&loop=1&autopause=0'
          }
          backgroundColor="#4f5565"
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

      <SingleImage image={mySingleImage} backgroundColor="#f2f2f2" />

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
          h2="I built the Unichem UI during my time at Touchpoint."
        />
        <SectionCopy textAlign="center">
          <p>
            Want to know more about the projects I worked on during my time at
            Touchpoint Group?
          </p>
        </SectionCopy>
        <BtnSection
          buttons={[
            { label: 'Touchpoint casestudy', url: '/projects/touchpoint' },
            { label: 'All Projects', url: '/projects' },
          ]}
        />
      </SectionWrapper>

      {/* <NextProject
        header="I built the Unichem UI during my time at Touchpoint."
        copy="Want to know more about the projects I worked on during my time at Touchpoint Group?"
        btnLabel="Touchpoint casestudy"
        btnUrl="/projects/touchpoint"
      /> */}
    </>
  ) : (
    <Spinner />
  );
};

export default UnichemPage;

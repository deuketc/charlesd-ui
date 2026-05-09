import IntroSection from '../Pages/IntroSection';
import ExperimentsSection from './ExperimentsSection';
import ProjectSection from './ProjectsSection';
import useWindowDimensions from '../hooks/UseWindowDimensions';

const LandingPage = () => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <IntroSection />
      {/* {width > 1280 && ( */}
      <>
        <ProjectSection />
        <ExperimentsSection />
      </>
      {/* )} */}
    </>
  );
};

export default LandingPage;

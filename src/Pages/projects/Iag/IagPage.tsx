import IagHero from '../../../components/Sections/IagHero/IagHero';

import Mobile from '../../../components/Sections/Mobile/Mobile';
import ResponsiveSlider from '../../../components/Sections/ResponsiveSlider/ResponsiveSlider';
import NextProject from '../../../components/Sections/NextProject/NextProject';

import Video from '../../../components/Sections/Video/Video';
import useImagesPreloader from '../../../hooks/UseImagesPreloader';
import Spinner from '../../../components/layout/Spinner/Spinner';
import DarkMode from '../../../components/Sections/DarkMode/DarkMode';
import BtnSection from '../../../components/Sections/BtnSection/BtnSection';
import SectionCopy from '../../../components/Sections/SectionCopy/SectionCopy';
import SectionWrapper from '../../../components/Sections/SectionWrapper/SectionWrapper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import {
  faSitemap,
  faScaleBalanced,
  faPeopleCarryBox,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCircleCheck,
  faClipboard,
  faStairs,
  faPersonWalking,
  faDesktop,
  faCloud,
  faGear,
  faHouseCrack,
  faCar,
  faBoltLightning,
  faDatabase,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

import sliderMobileImage from '../../../assets/projects/iag/iag-claims-ami-mobile.png';
import sliderTabletImage from '../../../assets/projects/iag/iag-claims-ami-tablet.png';
import sliderDesktopImage from '../../../assets/projects/iag/iag-claims-ami-desktop.png';

import mobile01 from '../../../assets/projects/iag/mobile-01.jpg';
import mobile02 from '../../../assets/projects/iag/mobile-02.jpg';
import mobile03 from '../../../assets/projects/iag/mobile-03.jpg';

// import screenhotImageDesktop from '../../../assets/projects/iag/screenshot-disaster_hub-state-1440.jpg';
// import screenhotImageTablet from '../../../assets/projects/iag/screenshot-disaster_hub-state-768.jpg';
// import screenhotImageMobile from '../../../assets/projects/iag/screenshot-disaster_hub-state-360.jpg';
import sliderImageEmail01 from '../../../assets/projects/iag/email-state-light.jpg';
import sliderImageEmail02 from '../../../assets/projects/iag/email-state-dark.jpg';

import screenshotState1280 from '../../../assets/projects/iag/screenshot-disaster-hub-state-1280.jpg';
import screenshotStateContent1280 from '../../../assets/projects/iag/screenshot-disaster-hub-state-content-1280.jpg';
// import screenshotAmi1280 from '../../../assets/projects/iag/screenshot-disaster-hub-ami-1280.jpg';

import styles from './Iag.module.scss';

import LogosHorizontalScroll from '../../../components/Sections/LogosHorizontalScroll/LogosHorizontalScroll';
import SectionHeader from '../../../components/Sections/SectionHeader/SectionHeader';
import SectionColumns from '../../../components/SectionColumns/SectionColumns';
import Testimonials from '../../../components/Sections/Testimonials/Testimonials';
import DualImage from '../../../components/Sections/DualImage/DualImage';

//const sliderImagesEmail = [sliderImageEmail01, sliderImageEmail02];
const responsiveSliderImages = [
  sliderMobileImage,
  sliderTabletImage,
  sliderDesktopImage,
];
// const mySingleImage = {
//   name: 'Disaster hub Image',
//   mobileSrc: screenhotImageMobile,
//   tabletSrc: screenhotImageTablet,
//   desktopSrc: screenhotImageDesktop,
// };

const myDualImage = {
  image1: {
    description: 'Disaster hub Image',
    location: screenshotState1280,
  },
  image2: {
    description: 'Disaster hub Image',
    location: screenshotStateContent1280,
  },
};

const myDualImage2 = {
  image1: {
    description: 'Disaster hub Image',
    location: sliderImageEmail01,
  },
  image2: {
    description: 'Disaster hub Image',
    location: sliderImageEmail02,
  },
};

const mobileShowcase = [mobile01, mobile02, mobile03];

const iagPageImages = [
  mobile01,
  mobile02,
  mobile03,

  sliderImageEmail01,
  sliderImageEmail02,
  sliderMobileImage,
  sliderTabletImage,
  sliderDesktopImage,
];

const IagPage = () => {
  const imgsLoaded = useImagesPreloader(iagPageImages);

  return imgsLoaded ? (
    <>
      <IagHero />

      <SectionWrapper
        backgroundColor="#1a1a1a"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
      >
        <SectionHeader
          style="L4"
          color="#fff"
          h1="Senior UI Developer specialising in enterprise systems, animation, and scalable front-end architecture within large insurance environments."
        />
      </SectionWrapper>

      {/* General IAG overview */}

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
          h2="Designing and Building Scalable Claims Lodgement Systems"
        />
        <SectionCopy textAlign="center">
          <p>
            At IAG, I contribute to the development of large-scale claims
            lodgement systems used across multiple insurance brands. These
            applications support high-volume, emotionally sensitive user
            journeys under strict regulatory and technical constraints.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <ResponsiveSlider
        brandColor="#592c82"
        backgroundColor="#ffffff"
        images={responsiveSliderImages}
      />

      <SectionWrapper
        backgroundColor="#ffffff"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
        maxWidth="110rem"
        align="left"
      >
        <SectionHeader style="L3" color="#000" h2="The Core Challenge" />
        <SectionCopy
          bulletlist={[
            {
              icon: faStairs,
              text: 'Multi-step journeys with dynamic branching logic depending on claim type',
            },
            {
              icon: faCircleCheck,
              text: 'Real-time validation tied to multiple backend API responses',
            },
            {
              icon: faClipboard,
              text: 'Strict regulatory and compliance constraints',
            },
            { icon: faCloud, text: 'Integration with multiple backend APIs' },
            {
              icon: faDesktop,
              text: 'Maintaining UI consistency across multiple brands',
            },
            {
              icon: faPersonWalking,
              text: 'Accessibility requirements across diverse user demographics',
            },
          ]}
        >
          <p>
            Claims lodgement systems operate at the intersection of technical
            complexity, regulatory requirements, and emotionally sensitive user
            journeys. Designing these applications requires balancing clarity,
            performance, and strict backend integration constraints.
          </p>
        </SectionCopy>
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
          h2="From Complexity to Scalable Systems"
        />
        <SectionCopy textAlign="center">
          <p>
            As a Senior UI Developer, I lead the front-end development of claims
            lodgement systems, collaborating closely with UX designers, backend
            developers, and product managers to ensure seamless integration and
            optimal user experience.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <SectionWrapper width="90%" backgroundColor="#ffffff">
        <div className={styles.architectureSection}>
          <div className={styles.architectureSectionCol1}>
            <SectionHeader
              textAlign="left"
              style="L2"
              h3="Architecture & System Design"
            />
          </div>
          <div className={styles.architectureSectionCol2}>
            <SectionCopy>
              <ul>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Architect large-scale UI applications from the ground up,
                    ensuring long-term scalability and maintainability
                  </p>
                </li>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Design modular component systems that support multi-brand
                    consistency and future expansion
                  </p>
                </li>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Structure complex workflows to reduce cognitive load while
                    preserving business logic integrity
                  </p>
                </li>
              </ul>
            </SectionCopy>
          </div>
          <div className={styles.architectureSectionCol3}>
            <SectionCopy textAlign="center">
              <span className={styles.architectureSectionIcon}>
                <FontAwesomeIcon icon={faSitemap} />
              </span>
            </SectionCopy>
          </div>
        </div>

        <div className={styles.architectureSection}>
          <div className={styles.architectureSectionCol1}>
            <SectionHeader
              textAlign="left"
              style="L2"
              h3="Modern Front-End Engineering"
            />
          </div>
          <div className={styles.architectureSectionCol2}>
            <SectionCopy>
              <ul>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Research, evaluate, and implement modern UI technologies to
                    improve performance and developer efficiency
                  </p>
                </li>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Introduce progressive enhancements that elevate user
                    experience without compromising stability
                  </p>
                </li>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Balance innovation with enterprise constraints and
                    compliance requirements
                  </p>
                </li>
              </ul>
            </SectionCopy>
          </div>
          <div className={styles.architectureSectionCol3}>
            <SectionCopy textAlign="center">
              <span className={styles.architectureSectionIcon}>
                <FontAwesomeIcon icon={faScaleBalanced} />
              </span>
            </SectionCopy>
          </div>
        </div>

        <div className={styles.architectureSection}>
          <div className={styles.architectureSectionCol1}>
            <SectionHeader
              textAlign="left"
              style="L2"
              h3="Quality & Reliability"
            />
          </div>
          <div className={styles.architectureSectionCol2}>
            <SectionCopy>
              <ul>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Write comprehensive unit and integration tests to ensure
                    application resilience across edge cases
                  </p>
                </li>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Advocate for test coverage as a core part of delivery, not
                    an afterthought
                  </p>
                </li>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Proactively identify performance bottlenecks and
                    accessibility risks
                  </p>
                </li>
              </ul>
            </SectionCopy>
          </div>
          <div className={styles.architectureSectionCol3}>
            <SectionCopy textAlign="center">
              <span className={styles.architectureSectionIcon}>
                <FontAwesomeIcon icon={faPeopleCarryBox} />
              </span>
            </SectionCopy>
          </div>
        </div>

        <div className={styles.architectureSection}>
          <div className={styles.architectureSectionCol1}>
            <SectionHeader textAlign="left" style="L2" h3="DevOps & Delivery" />
          </div>
          <div className={styles.architectureSectionCol2}>
            <SectionCopy>
              <ul>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Configure and maintain CI/CD pipelines to support safe,
                    repeatable deployments
                  </p>
                </li>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Collaborate with backend teams to manage API integrations
                    and deployment workflows
                  </p>
                </li>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Ensure production releases meet both technical and business
                    expectations
                  </p>
                </li>
              </ul>
            </SectionCopy>
          </div>
          <div className={styles.architectureSectionCol3}>
            <SectionCopy textAlign="center">
              <span className={styles.architectureSectionIcon}>
                <FontAwesomeIcon icon={faGear} />
              </span>
            </SectionCopy>
          </div>
        </div>

        <div className={styles.architectureSection}>
          <div className={styles.architectureSectionCol1}>
            <SectionHeader
              textAlign="left"
              style="L2"
              h3="Stakeholder Collaboration"
            />
          </div>
          <div className={styles.architectureSectionCol2}>
            <SectionCopy>
              <ul>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Present new features and architectural decisions to
                    stakeholders, translating technical detail into business
                    value
                  </p>
                </li>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Collaborate closely with product owners and designers to
                    align user needs with technical feasibility
                  </p>
                </li>
                <li className={styles.architectureSection_listItem}>
                  <p className={styles.architectureSection_listItemCopy}>
                    Mentor team members and contribute to raising overall UI
                    standards
                  </p>
                </li>
              </ul>
            </SectionCopy>
          </div>
          <div className={styles.architectureSectionCol3}>
            <SectionCopy textAlign="center">
              <span className={styles.architectureSectionIcon}>
                <FontAwesomeIcon icon={faJsSquare} />
              </span>
            </SectionCopy>
          </div>
        </div>
      </SectionWrapper>

      <LogosHorizontalScroll />

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
          h2="Designing for Scale"
          style="L3"
          color="#000"
        />
        <SectionCopy textAlign="center">
          <p>
            Designing for scale requires more than clean interfaces, it demands
            systems thinking. The claims platforms I work on support multiple
            brands, integrate with numerous backend services, and process
            thousands of real customer journeys every month.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#ffffff"
        paddingTop={false}
        paddingBottom={true}
        width="90%"
      >
        <SectionColumns>
          <SectionCopy textAlign="center">
            <div className={styles.supportsMajorBrands}>
              <p className={styles.supportsMajorBrands_copy}>
                Supports major insurance brands
              </p>
              <p>
                <span className={styles.supportsMajorBrands_count}>7</span>
                <span className={styles.supportsMajorBrands_attribute}>+</span>
              </p>
            </div>
          </SectionCopy>
          <SectionCopy textAlign="center">
            <div className={styles.supportsMajorBrands}>
              <p className={styles.supportsMajorBrands_copy}>User Interfaces</p>
              <p>
                <span className={styles.supportsMajorBrands_count}>16</span>
                <span className={styles.supportsMajorBrands_attribute}>+</span>
              </p>
            </div>
          </SectionCopy>
          <SectionCopy textAlign="center">
            <div className={styles.supportsMajorBrands}>
              <p className={styles.supportsMajorBrands_copy}>
                Integrate with backend API's
              </p>
              <p>
                <span className={styles.supportsMajorBrands_count}>20</span>
                <span className={styles.supportsMajorBrands_attribute}>+</span>
              </p>
            </div>
          </SectionCopy>
          <SectionCopy textAlign="center">
            <div className={styles.supportsMajorBrands}>
              <p className={styles.supportsMajorBrands_copy}>User per month</p>
              <p>
                <span className={styles.supportsMajorBrands_count}>5,000</span>
                <span className={styles.supportsMajorBrands_attribute}>+</span>
              </p>
            </div>
          </SectionCopy>
        </SectionColumns>
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#ffffff"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
      >
        <SectionHeader h2="Testimonials" style="L3" color="#000" />
        <Testimonials childWidth={30}>
          <SectionCopy>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore."
            </p>
            <p>Charlie Deukett</p>
          </SectionCopy>
          <SectionCopy>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore."
            </p>
            <p>Charlie Deukett</p>
          </SectionCopy>
          <SectionCopy>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore."
            </p>
            <p>Charlie Deukett</p>
          </SectionCopy>
          <SectionCopy>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore."
            </p>
            <p>Charlie Deukett</p>
          </SectionCopy>
          <SectionCopy>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore."
            </p>
            <p>Charlie Deukett</p>
          </SectionCopy>
          <SectionCopy>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore."
            </p>
            <p>Charlie Deukett</p>
          </SectionCopy>
        </Testimonials>
      </SectionWrapper>

      {/* Disaster claims hub */}

      <SectionWrapper
        backgroundColor="#f2f2f2"
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
          h2="Disaster Claims Hub"
        />
        <SectionCopy
          textAlign="center"
          bulletlist={[
            {
              icon: faHouseCrack,
              text: 'Built for AMI, State and IAG',
            },
            {
              icon: faCar,
              text: 'Designed to support high traffic during disaster events',
            },
            {
              icon: faCloud,
              text: 'Built using Oracle Service Cloud',
            },
          ]}
        >
          <p>
            During major weather events and natural hazards, customers need fast
            access to clear information about the claims process. The Disaster
            Claims Hub was designed as a central information portal to help
            customers understand what to do after an event and how to manage
            their claims across multiple insurance brands.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <SectionWrapper backgroundColor="#f2f2f2">
        <DualImage images={myDualImage} />
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#f2f2f2"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
        maxWidth="110rem"
        align="left"
      >
        <SectionHeader style="L3" color="#000" h2="Technical Implementation" />
        <SectionCopy
          textAlign="center"
          bulletlist={[
            {
              icon: faCloud,
              text: 'Built within the constraints of Oracle Service Cloud',
            },
            {
              icon: faCode,
              text: 'Developed reusable UI components for multiple brands',
            },
            {
              icon: faDesktop,
              text: 'Implemented responsive layouts across device sizes',
            },
            {
              icon: faBoltLightning,
              text: 'Optimized for fast content updates during disaster events',
            },
            {
              icon: faDatabase,
              text: 'Integrated CMS-driven content structure for flexible updates',
            },
          ]}
        ></SectionCopy>
      </SectionWrapper>

      <Mobile images={mobileShowcase} backgroundColor="#f2f2f2" />

      <SectionWrapper
        backgroundColor="#f2f2f2"
        paddingTop={false}
        paddingBottom={true}
        width="90%"
        align="right"
        maxWidth="60rem"
      >
        <SectionCopy textAlign="right">
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore."
          </p>
          <p>Charlie Deukett</p>
        </SectionCopy>
      </SectionWrapper>

      {/* What are the odds Promotional microsite */}

      <SectionWrapper
        backgroundColor="#ffffff"
        paddingTop={true}
        paddingBottom={false}
        width="90%"
        align="center"
        maxWidth="110rem"
      >
        <SectionHeader
          textAlign="center"
          style="L3"
          color="#000"
          h2="What are the odds?"
        />
        <SectionCopy textAlign="center">
          <p>
            An promotional microsite created for a campaign between State
            Insurance and Fly Buys. This was built using animation to create a
            playful, engaging experience that worked seamlessly across both
            desktop and mobile devices.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <Video
        src="https://player.vimeo.com/video/355045208?autoplay=1&loop=1&autopause=0"
        backgroundColor="#fff"
      />

      <BtnSection
        btn01Url="https://deuketc.github.io/wato/"
        btn02Url="/projects/wato"
        btn01Label="Launch Project"
        btn02Label="More Info"
        backgroundColor="#fff"
      />

      {/* email templates */}

      <SectionWrapper
        backgroundColor="#f2f2f2"
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
          h2="Engineering Scalable Email Communication Systems"
        />
        <SectionCopy textAlign="center">
          <p>
            Email remains a critical communication channel for our customers,
            delivering important updates such as policy confirmations,
            notifications, and service communications. I developed a scalable
            responsive email template system used across multiple brands to
            ensure consistent, reliable delivery across all major email clients.
          </p>
        </SectionCopy>
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#f2f2f2"
        width="90%"
        paddingBottom={true}
        paddingTop={false}
      >
        <DualImage images={myDualImage2} />
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#f2f2f2"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
        maxWidth="110rem"
        align="left"
      >
        <SectionHeader style="L3" color="#000" h2="Technical Highlights" />
        <SectionCopy
          textAlign="center"
          bulletlist={[
            {
              icon: faCloud,
              text: 'Fully responsive HTML email templates supporting mobile and desktop clients',
            },
            {
              icon: faCode,
              text: 'Extensive cross-client testing using <a href="https://www.litmus.com/" target="_blank" rel="noopener noreferrer">Litmus</a>',
            },
            {
              icon: faDesktop,
              text: 'Optimized layouts for dark mode compatibility',
            },
            {
              icon: faBoltLightning,
              text: 'Modular template structure allowing reuse across multiple communication types',
            },
            {
              icon: faDatabase,
              text: 'Built to support high-volume transactional email delivery',
            },
          ]}
        ></SectionCopy>
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#f2f2f2"
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
          h2="Reusable Template System"
        />
        <SectionCopy textAlign="center">
          <p>
            The email templates were designed as a reusable system, allowing
            teams to rapidly create new communications while maintaining
            consistent layout, accessibility, and brand styling.
          </p>
          <p>
            <button className="">Github Repo</button>
          </p>
        </SectionCopy>
      </SectionWrapper>

      {/* <DarkMode images={sliderImagesEmail} backgroundColor="#f2f2f2" /> */}
      <NextProject
        backgroundColor="#fff"
        copy="Unichem is network of more than 250 pharmacies throughout New&nbsp;Zealand."
        header="Want to see another project?"
        btnUrl="/projects/unichem"
        btnLabel="Unichem casestudy"
      />
    </>
  ) : (
    <Spinner />
  );
};

export default IagPage;

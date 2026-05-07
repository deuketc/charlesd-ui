import IagHero from '../../../components/Sections/IagHero/IagHero';
import Mobile from '../../../components/Sections/Mobile/Mobile';
import ResponsiveSlider from '../../../components/Sections/ResponsiveSlider/ResponsiveSlider';
import Video from '../../../components/Sections/Video/Video';
import useImagesPreloader from '../../../hooks/UseImagesPreloader';
import Spinner from '../../../components/layout/Spinner/Spinner';
import BtnSection from '../../../components/Sections/BtnSection/BtnSection';
import SectionCopy from '../../../components/Sections/SectionCopy/SectionCopy';
import SectionWrapper from '../../../components/Sections/SectionWrapper/SectionWrapper';
import LogosHorizontalScroll from '../../../components/Sections/LogosHorizontalScroll/LogosHorizontalScroll';
import SectionHeader from '../../../components/Sections/SectionHeader/SectionHeader';
import SectionColumns from '../../../components/SectionColumns/SectionColumns';
import Testimonials from '../../../components/Sections/Testimonials/Testimonials';
import DualImage from '../../../components/Sections/DualImage/DualImage';
import NumberCountAnimation from '../../../components/Sections/NumberCountAnimation/NumberCountAnimation';

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
  faArrowUpRightFromSquare,
  faCircleHalfStroke,
  faCubesStacked,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import sliderMobileImage from '../../../assets/projects/iag/iag-claims-ami-mobile.png';
import sliderTabletImage from '../../../assets/projects/iag/iag-claims-ami-tablet.png';
import sliderDesktopImage from '../../../assets/projects/iag/iag-claims-ami-desktop.png';

import mobile01 from '../../../assets/projects/iag/mobile-01b.jpg';
import mobile02 from '../../../assets/projects/iag/mobile-02b.jpg';
import mobile03 from '../../../assets/projects/iag/mobile-03b.jpg';

import sliderImageEmail01 from '../../../assets/projects/iag/email-state-light.jpg';
import sliderImageEmail02 from '../../../assets/projects/iag/email-state-dark.jpg';

import screenshotState1280 from '../../../assets/projects/iag/screenshot-disaster-hub-state-1280.jpg';
import screenshotStateContent1280 from '../../../assets/projects/iag/screenshot-disaster-hub-state-content-1280.jpg';

import Ami from '../../../assets/projects/iag/Ami';
import Coles from '../../../assets/projects/iag/Coles';
import Lumley from '../../../assets/projects/iag/Lumley';
import State from '../../../assets/projects/iag/State';
import Nrma from '../../../assets/projects/iag/Nrma';
import Nzi from '../../../assets/projects/iag/Nzi';

import styles from './Iag.module.scss';

const logos = [<Ami />, <State />, <Coles />, <Nzi />, <Lumley />, <Nrma />];

const responsiveSliderImages = [
  sliderMobileImage,
  sliderTabletImage,
  sliderDesktopImage,
];

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
  sliderMobileImage,
  sliderTabletImage,
  sliderDesktopImage,

  mobile01,
  mobile02,
  mobile03,

  sliderImageEmail01,
  sliderImageEmail02,

  screenshotState1280,
  screenshotStateContent1280,

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
        <SectionHeader style="hidden" color="#fff" h1="IAG." />
        <SectionHeader
          style="L4"
          color="#fff"
          h2="Senior UI Developer specialising in enterprise systems, animation, and scalable front-end architecture within large insurance environments."
        />
      </SectionWrapper>

      {/* General IAG overview */}

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
        backgroundColor="#ffffff"
        images={responsiveSliderImages}
        imageHeights={[-900, -759, -1535]}
      />

      <SectionWrapper
        backgroundColor="#ffffff"
        paddingTop={false}
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
        align="center"
      >
        <SectionHeader
          textAlign="center"
          style="L3"
          color="#000"
          h2="From Complexity to Scalable Systems"
        />
        <SectionCopy textAlign="center">
          <p className={styles.copySection}>
            As a Senior UI Developer, I lead the front-end development of claims
            lodgement systems, collaborating closely with UX designers, backend
            developers, and product managers to ensure seamless integration and
            optimal user experience.
          </p>
        </SectionCopy>

        <div>
          <article className={styles.architectureSection}>
            <div className={styles.architectureSectionCol1}>
              <SectionHeader
                textAlign="left"
                style="L2"
                h3="Architecture & System Design"
              />
            </div>
            <div className={styles.architectureSectionCol2}>
              <SectionCopy>
                <ul className={styles.architectureSection_list}>
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
          </article>

          <article className={styles.architectureSection}>
            <div className={styles.architectureSectionCol1}>
              <SectionHeader
                textAlign="left"
                style="L2"
                h3="Modern Front-End Engineering"
              />
            </div>
            <div className={styles.architectureSectionCol2}>
              <SectionCopy>
                <ul className={styles.architectureSection_list}>
                  <li className={styles.architectureSection_listItem}>
                    <p className={styles.architectureSection_listItemCopy}>
                      Research, evaluate, and implement modern UI technologies
                      to improve performance and developer efficiency
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
                  <FontAwesomeIcon icon={faJsSquare} />
                </span>
              </SectionCopy>
            </div>
          </article>

          <article className={styles.architectureSection}>
            <div className={styles.architectureSectionCol1}>
              <SectionHeader
                textAlign="left"
                style="L2"
                h3="Quality & Reliability"
              />
            </div>
            <div className={styles.architectureSectionCol2}>
              <SectionCopy>
                <ul className={styles.architectureSection_list}>
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
                  <FontAwesomeIcon icon={faScaleBalanced} />
                </span>
              </SectionCopy>
            </div>
          </article>

          <article className={styles.architectureSection}>
            <div className={styles.architectureSectionCol1}>
              <SectionHeader
                textAlign="left"
                style="L2"
                h3="DevOps & Delivery"
              />
            </div>
            <div className={styles.architectureSectionCol2}>
              <SectionCopy>
                <ul className={styles.architectureSection_list}>
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
                      Ensure production releases meet both technical and
                      business expectations
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
          </article>

          <article className={styles.architectureSection}>
            <div className={styles.architectureSectionCol1}>
              <SectionHeader
                textAlign="left"
                style="L2"
                h3="Stakeholder Collaboration"
              />
            </div>
            <div className={styles.architectureSectionCol2}>
              <SectionCopy>
                <ul className={styles.architectureSection_list}>
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
                  <FontAwesomeIcon icon={faPeopleCarryBox} />
                </span>
              </SectionCopy>
            </div>
          </article>
        </div>
      </SectionWrapper>

      <LogosHorizontalScroll images={logos} />

      <SectionWrapper
        backgroundColor="#ffffff"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
        align="center"
      >
        <SectionHeader
          textAlign="center"
          h2="Designing for Scale"
          style="L3"
          color="#000"
        />
        <SectionCopy textAlign="center">
          <p className={styles.copySection}>
            Designing for scale requires more than clean interfaces, it demands
            systems thinking. The claims platforms I work on support multiple
            brands, integrate with numerous backend services, and process
            thousands of real customer journeys every month.
          </p>
        </SectionCopy>

        <div className={styles.supportsMajorBrands_wrapper}>
          <SectionWrapper
            backgroundColor="#ffffff"
            paddingTop={true}
            paddingBottom={true}
            width="90%"
          >
            <SectionColumns>
              <SectionCopy textAlign="center">
                <SectionHeader
                  textAlign="center"
                  h3="Supports major insurance brands"
                  style="L2"
                  color="#000"
                />
                <NumberCountAnimation number="7" />
              </SectionCopy>
              <SectionCopy textAlign="center">
                <SectionHeader
                  textAlign="center"
                  h3="User Interfaces"
                  style="L2"
                  color="#000"
                />
                <NumberCountAnimation number="16" />
              </SectionCopy>
              <SectionCopy textAlign="center">
                <SectionHeader
                  textAlign="center"
                  h3="Integrate with backend API's"
                  style="L2"
                  color="#000"
                />
                <NumberCountAnimation number="20" />
              </SectionCopy>
            </SectionColumns>
          </SectionWrapper>
        </div>
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="#ffffff"
        paddingTop={false}
        paddingBottom={true}
        width="90%"
      >
        <SectionHeader h2="Testimonials" style="L3" color="#000" />
        <Testimonials>
          <SectionCopy>
            <p>
              "I just want to take the chance to give a shout out to you for all
              the effort you have put into BOL and Disaster Claims Hub redesign.
              It's definitely "Act & Own it" spirit when you step outside of the
              "developer" zone to connect and collaborate with our vendors and
              other teams to get the works done in orchestration. Great work,
              buddy!!!"
            </p>
            <p>Van-Anh Tran</p>
          </SectionCopy>
          <SectionCopy>
            <p>
              "Charlie has been an incredible asset to the Buy 1 team's skill
              uplift in React. Since October 2021 Charlie has been coaching the
              team and dedicating approx. 3 hours of his personal time each week
              to plan and prepare content, present it, facilitate coaching
              sessions, answer questions, and provide guidance to learners.
              Throughout the entire programme Charlie has embodied the IAG
              values Easier together & Reimagine today and without a doubt it
              has been his enthusiastic attitude and willingness to share his
              knowledge and coach others that has added to the success of this
              programme."
            </p>
            <p>Natalia Gimenez</p>
          </SectionCopy>
          <SectionCopy>
            <p>
              "Charlie is always very helpful and friendly in our team. He has
              kindly scheduled meeting to coach me with HTML and CSS lesson that
              helped me a lot during my skill up in front-end work. When I have
              questions regarding to front-end development, he is always make
              some time to help me fix issue that I was struggled with. he loves
              to share his experience/knowledge with me, help me quickly
              understand the front-end frame work. I would like to THANK Charlie
              for his helping and knowledge sharing, which helped me skilling up
              in front-end development."
            </p>
            <p>Quin Zhou</p>
          </SectionCopy>
          <SectionCopy>
            <p>
              "Charlie has been essential in assisting our team in upskilling in
              React. He would not only be our react champion who would take us
              through this learning process, but he would be also available
              outside of the allocated time to have a chat and help us with this
              way of developing websites. There were times where Charlie went
              above and beyond what I could consider a very helpful colleague;
              when we approached him with something more complex, he would spend
              extra time researching the subject over the weekend so he would be
              able to come with an answer the following week."
            </p>
            <p>Radek Soucek</p>
          </SectionCopy>
          <SectionCopy>
            <p>
              "Charlie has been incredibly helpful, supportive and understanding
              during the process of getting me onboard. With doing regular
              meetings and catchups to assist me in where ever I need support, I
              am already feeling more confident to tackle whatever comes.
              Charlie's willingness to take time out of his schedule and be
              availible when I needed has been invaluable. He also has assisted
              me in my first ticket and pointing me in the right direction to
              get it over the line. It was a huge milestone for me and couldn't
              have asked for a better person to guide me through it! Thank you
              so much Charlie and Happy Birthday for tomorrow!"
            </p>
            <p>Ken Sethi</p>
          </SectionCopy>
          <SectionCopy>
            <p>
              "Loving the energy Charlie is bringing to the PRJ rewrite! Had a
              really good meeting today, about how we can deliver Glass Breakage
              and Keys and Locks to the current PRJ environment as we are likely
              to have some team constraints that may prevent us from being able
              to deliver in November. Charlies energy and excitment for the work
              hes doing in PRJ is infectious. So cool to see the work we are
              doing to making him & our team Fizz!!"
            </p>
            <p>Keisha Soffee</p>
          </SectionCopy>
          <SectionCopy>
            <p>
              "When new requirements or challenges emerge, Charlie steps up and
              gets the job done with enthusiasm and efficacy. Even when the
              tasks require after hours stakeholder meetings, or research,
              Charlie makes it happen, setting aside the time, ensuring we
              consistantly hit our targets and continue delivering great
              business value"
            </p>
            <p>Andy Saunders</p>
          </SectionCopy>
        </Testimonials>
      </SectionWrapper>

      {/* Disaster claims hub */}

      <SectionWrapper
        backgroundColor="#f2f2f2"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
        //maxWidth="110rem"
        align="center"
      >
        <SectionHeader
          textAlign="center"
          style="L3"
          color="#000"
          h2="Disaster Claims Hub"
        />
        <div className={styles.copySection}>
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
              During major weather events and natural hazards, customers need
              fast access to clear information about the claims process. The
              Disaster Claims Hub was designed as a central information portal
              to help customers understand what to do after an event and how to
              manage their claims across multiple insurance brands.
            </p>
          </SectionCopy>
        </div>
        <SectionWrapper
          paddingTop={true}
          width="100%"
          backgroundColor="#f2f2f2"
        >
          <DualImage images={myDualImage} />
        </SectionWrapper>

        <SectionWrapper
          backgroundColor="#f2f2f2"
          paddingTop={true}
          paddingBottom={false}
          align="left"
        >
          <SectionHeader
            style="L3"
            color="#000"
            h2="Technical Implementation"
          />
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

        <Mobile
          shouldAnimate={true}
          images={mobileShowcase}
          backgroundColor="#f2f2f2"
        />

        <SectionWrapper
          backgroundColor="#f2f2f2"
          paddingTop={false}
          paddingBottom={false}
          align="right"
          maxWidth="60rem"
        >
          <SectionHeader
            textAlign="right"
            style="L2"
            color="#000"
            h3="Client Testimonial"
          />
          <SectionCopy textAlign="right">
            <p>
              "Charlie, honestly you are one of the best developers I've worked
              with. You're super talented, amazing at communication, and always
              so helpful. Thank you so much for your epic ownership of the
              Disaster Claims Hub...you also just made the whole thing look
              easy, which is a true gift to be able to do. I know I can speak
              for the whole project team when I say how much we've appreciated
              the regular updates...and now we're almost live! Congrats on a
              great job getting this across the line for us. You're a true
              legend!"
            </p>
            <p>Tineke Bright</p>
          </SectionCopy>
        </SectionWrapper>
      </SectionWrapper>

      {/* What are the odds Promotional microsite */}

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

        <Video
          src="https://player.vimeo.com/video/355045208?autoplay=1&loop=1&autopause=0"
          backgroundColor="#fff"
        />

        <BtnSection
          buttons={[
            {
              icon: faArrowUpRightFromSquare,
              label: 'Launch Project',
              url: 'https://deuketc.github.io/wato/',
            },
            { label: 'More Info', url: '/projects/wato' },
          ]}
          backgroundColor="#fff"
        />
      </SectionWrapper>

      {/* email templates */}

      <SectionWrapper
        backgroundColor="#f2f2f2"
        paddingTop={true}
        paddingBottom={true}
        width="90%"
        align="center"
      >
        <div className={styles.copySection}>
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
              ensure consistent, reliable delivery across all major email
              clients.
            </p>
          </SectionCopy>
        </div>

        <SectionWrapper
          backgroundColor="#f2f2f2"
          paddingBottom={false}
          paddingTop={true}
        >
          <DualImage images={myDualImage2} />
        </SectionWrapper>

        <SectionWrapper
          backgroundColor="#f2f2f2"
          paddingTop={true}
          paddingBottom={true}
          maxWidth="110rem"
          align="left"
        >
          <SectionHeader style="L3" color="#000" h2="Technical Highlights" />
          <SectionCopy
            textAlign="center"
            bulletlist={[
              {
                icon: faDesktop,
                text: 'Fully responsive HTML email templates supporting mobile and desktop clients',
              },
              {
                icon: faCircleCheck,
                text: 'Extensive cross-client testing using <a href="https://www.litmus.com/" target="_blank" rel="noopener noreferrer">Litmus</a>',
              },
              {
                icon: faCircleHalfStroke,
                text: 'Optimized layouts for dark mode compatibility',
              },
              {
                icon: faCubesStacked,
                text: 'Modular template structure allowing reuse across multiple communication types',
              },
              {
                icon: faEnvelope,
                text: 'Built to support high-volume transactional email delivery',
              },
            ]}
          ></SectionCopy>
        </SectionWrapper>

        <SectionWrapper
          backgroundColor="#f2f2f2"
          paddingTop={false}
          paddingBottom={false}
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
          </SectionCopy>
          <BtnSection
            buttons={[
              {
                icon: faCode,
                label: 'GitHub Repo',
                url: 'https://github.com/deuketc/edm-desktop-first',
              },
            ]}
            backgroundColor="#f2f2f2"
          />
        </SectionWrapper>
      </SectionWrapper>

      {/* <DarkMode images={sliderImagesEmail} backgroundColor="#f2f2f2" /> */}

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
          h2="Want to see another project?"
        />
        <SectionCopy textAlign="center">
          <p>
            Unichem is network of more than 250 pharmacies throughout
            New&nbsp;Zealand.
          </p>
        </SectionCopy>
        <BtnSection
          buttons={[
            { label: 'Unichem casestudy', url: '/projects/unichem' },
            { label: 'All Projects', url: '/projects' },
          ]}
        />
      </SectionWrapper>
    </>
  ) : (
    <Spinner />
  );
};

export default IagPage;

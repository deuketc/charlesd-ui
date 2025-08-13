import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  createRef,
  Suspense,
} from 'react';
import { Canvas } from '@react-three/fiber';
import Coffee from '../components/Coffee/Coffee';
import useWindowDimensions from '../hooks/UseWindowDimensions';
import { useGLTF, Html } from '@react-three/drei';
import styles from './IntroSection.module.scss';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Spinner from '../components/layout/Spinner/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowDown,
  faAngleDown,
  faSortDown,
  faChevronDown,
  faAnglesDown,
} from '@fortawesome/free-solid-svg-icons';
import MatterDemo from '../components/Sections/MatterDemo/MatterDemo';

const Landing = () => {
  const [footerHeight, setFooterHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const { height, width } = useWindowDimensions();
  const landing = useRef(null);
  const headerRef = useRef(null);
  const copyRef = useRef(null);
  const buttonRef = useRef(null);
  const introScrollCta = useRef(null);
  const buttonSecondaryRef = useRef(null);

  useEffect(() => {
    const footer = document.getElementsByTagName('footer')[0].clientHeight;
    const header = document.getElementsByTagName('header')[0].clientHeight;
    setFooterHeight(footer);
    setHeaderHeight(header);
  }, [height]);

  useEffect(() => {
    // Header
    gsap.set(headerRef.current, {
      opacity: 0,
      y: 80,
    });

    gsap.set(copyRef.current, {
      opacity: 0,
      y: 80,
    });

    gsap.set(buttonRef.current, {
      opacity: 0,
      y: 80,
    });

    gsap.set(buttonSecondaryRef.current, {
      opacity: 0,
      y: 80,
    });

    gsap.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.2,
    });

    gsap.to(copyRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.4,
    });

    gsap.to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.6,
    });

    gsap.to(buttonSecondaryRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.8,
    });

    gsap.to(introScrollCta.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: introScrollCta.current,
        start: 'top 90%', // when the top of the element hits the top of the viewport
        end: '+=300', // when the top of the element reaches 70% down the viewport
        scrub: true,
      },
    });
  });

  return (
    <>
      <section className={styles.intro}>
        {/* {width > 1280 && (
        <div
          style={{
            // height: `${height - footerHeight - headerHeight}px`,
            height: `${height}px`,
            //marginTop: `${headerHeight}px`,
            marginRight: '40%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Suspense fallback={<Spinner />}>
            <Canvas
              className="r3f"
              shadows
              camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
              }}
            >
              <Coffee />
            </Canvas>
          </Suspense>
        </div>
      )} */}
        <MatterDemo />
        <div ref={landing} className={styles.intro__right_col}>
          <h1 ref={headerRef} className={styles.intro__heading}>
            Welcome to my Digital Sandbox
          </h1>
          <p ref={copyRef} className={styles.intro__p1}>
            I'm Charlie, a developer building diverse and engaging web
            experiences.
            <br />
            Tap the mushroom, stir the cosmos, trip the lights. Then check out
            my projects below.
          </p>

          <div className={styles.intro__btn_section}>
            <Link
              ref={buttonRef}
              to="/projects"
              className={styles.intro__button}
            >
              View Projects
            </Link>

            <Link
              ref={buttonSecondaryRef}
              to="/experiments"
              className={styles.intro__button_secondary}
            >
              Experiments
            </Link>
          </div>
        </div>
        <p ref={introScrollCta} className={styles.intro__scroll_cta}>
          <span className={styles.intro__scroll_cta_copy}>
            <FontAwesomeIcon icon={faAnglesDown} />
            &nbsp;&nbsp;&nbsp;&nbsp;Scroll to projects&nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faAnglesDown} />
          </span>
        </p>
      </section>
      <div className={styles.spacer}></div>
    </>
  );
};

export default Landing;

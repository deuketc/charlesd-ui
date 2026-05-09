import { useRef, useLayoutEffect } from 'react';
import useWindowDimensions from '../hooks/UseWindowDimensions';
import styles from './IntroSection.module.scss';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import MatterDemo from '../components/Sections/MatterDemo/MatterDemo';

const Landing = () => {
  const { height, width } = useWindowDimensions();
  const landing = useRef(null);
  const headerRef = useRef(null);
  const copyRef = useRef(null);
  const buttonRef = useRef(null);
  const buttonSecondaryRef = useRef(null);

  useLayoutEffect(() => {}, [height]);

  useLayoutEffect(() => {
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
  });

  return (
    <>
      <section className={styles.intro}>
        <MatterDemo />
        <div ref={landing} className={styles.intro__right_col}>
          <h1 ref={headerRef} className={styles.intro__heading}>
            Built to move
          </h1>
          <p ref={copyRef} className={styles.intro__p1}>
            I'm Charlie, a developer building diverse and engaging web
            experiences.
          </p>

          {/* <div className={styles.intro__btn_section}>
            <Link
              ref={buttonRef}
              to="/projects"
              className={styles.intro__button}
            >
              View Projects
            </Link>

            <Link
              ref={buttonSecondaryRef}
              to="/resume"
              className={styles.intro__button_secondary}
            >
              Resume
            </Link>
          </div> */}
        </div>
        <p className={styles.intro__scroll_cta}>
          <span className={styles.intro__scroll_cta_copy}>
            <FontAwesomeIcon icon={faAnglesDown} />
            &nbsp;&nbsp;&nbsp;&nbsp;Scroll to projects&nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faAnglesDown} />
          </span>
        </p>
        <div className={styles.scrollIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            fill="none"
          >
            <path fill="#fff" d="M60 77 30 47l7-7 23 23 23-23 7 7-30 30Z" />
          </svg>
        </div>
      </section>
      <div className={styles.spacer}></div>
    </>
  );
};

export default Landing;

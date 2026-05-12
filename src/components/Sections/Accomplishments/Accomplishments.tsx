import React from 'react';
import styles from './Accomplishments.module.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faCode,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

import SectionCopy from '../../../components/Sections/SectionCopy/SectionCopy';
import SectionWrapper from '../../../components/Sections/SectionWrapper/SectionWrapper';
import SectionHeader from '../../../components/Sections/SectionHeader/SectionHeader';

1;
const Accomplishments = () => {
  return (
    <>
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
          h2="Accomplishments"
        />
        <SectionCopy textAlign="left">
          <ul className={styles.accomplishments__list}>
            <li>
              <p className={styles.accomplishments__copy}>
                <span className={styles.accomplishments__icon}>
                  <FontAwesomeIcon icon={faCode} />
                </span>
                <span>
                  Awarded a &ldquo;TOA&rdquo; for the development of the{' '}
                  <Link to="/projects/wato">What are the odds</Link> State
                  Insurance promotion website.
                </span>
              </p>
            </li>
            <li>
              <p className={styles.accomplishments__copy}>
                <span className={styles.accomplishments__icon}>
                  <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span>
                  Received Touchpoint Group's innovation award for responsive
                  email
                </span>
              </p>
            </li>
            <li>
              <p className={styles.accomplishments__copy}>
                <span className={styles.accomplishments__icon}>
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>
                <span>
                  Graduated with Distinction in the Diploma of Digital Media at
                  Media Design School.
                </span>
              </p>
            </li>
          </ul>
        </SectionCopy>
      </SectionWrapper>
    </>
    // <section className={styles.accomplishments}>
    //   <div className={styles.accomplishments__wrapper}>
    //     <h2 className={styles.accomplishments__header}>Accomplishments</h2>
    //     <div className={styles.accomplishments__content}>
    //       <div className={styles.accomplishments__cell}>
    //         <div className={styles.accomplishments__image}>
    //           {/* <Trophy /> */}
    //         </div>
    //         <p className={styles.accomplishments__copy}>
    //           Awarded a &ldquo;TOA&rdquo; for the development of the "What are
    //           the odds" State Insurance promotion website.{' '}
    //         </p>
    //         <p className={styles.accomplishments__link}>
    //           <Link className="btn" to="/projects/wato">
    //             Read more
    //           </Link>
    //         </p>
    //       </div>
    //       <div className={styles.accomplishments__cell}>
    //         <div className={styles.accomplishments__image}>
    //           {/* <Lightbulb /> */}
    //         </div>
    //         <p className={styles.accomplishments__copy}>
    //           Received Touchpoint Group's innovation award for responsive email
    //           campaign development.
    //         </p>
    //       </div>
    //       <div className={styles.accomplishments__cell}>
    //         <div className={styles.accomplishments__image}>
    //           {/* <Responsive /> */}
    //         </div>
    //         <p className={styles.accomplishments__copy}>
    //           Developed a responsive front-end for Solutionists using HTML5 and
    //           CSS3.
    //         </p>
    //       </div>
    //       <div className={styles.accomplishments__cell}>
    //         <div className={styles.accomplishments__image}>
    //           {/* <Gradcap /> */}
    //         </div>
    //         <p className={styles.accomplishments__copy}>
    //           Graduated with Distinction in the Diploma of Digital Media at
    //           Media Design School.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Accomplishments;

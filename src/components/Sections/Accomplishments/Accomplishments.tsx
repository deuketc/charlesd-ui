import React from 'react';
import styles from './Accomplishments.module.scss';
import { Link } from 'react-router-dom';
import Gradcap from './Gradcap';
import Responsive from './Responsive';
import Lightbulb from './Lightbulb';
import Trophy from './Trophy';

const Accomplishments = () => {
  return (
    <section className={styles.accomplishments}>
      <div className={styles.accomplishments__wrapper}>
        <h2 className={styles.accomplishments__header}>Accomplishments</h2>
        <div className={styles.accomplishments__content}>
          <div className={styles.accomplishments__cell}>
            <div className={styles.accomplishments__image}>
              <Trophy />
            </div>
            <p className={styles.accomplishments__copy}>
              Awarded a &ldquo;TOA&rdquo; for the development of the "What are
              the odds" State Insurance promotion website.{' '}
            </p>
            <p>
              <Link className="btn" to="/projects/wato">
                Read more
              </Link>
            </p>
          </div>
          <div className={styles.accomplishments__cell}>
            <div className={styles.accomplishments__image}>
              <Lightbulb />
            </div>
            <p className={styles.accomplishments__copy}>
              Received Touchpoint Group's innovation award for responsive email
              campaign development.
            </p>
          </div>
          <div className={styles.accomplishments__cell}>
            <div className={styles.accomplishments__image}>
              <Responsive />
            </div>
            <p className={styles.accomplishments__copy}>
              Developed a responsive front-end for Solutionists using HTML5 and
              CSS3.
            </p>
          </div>
          <div className={styles.accomplishments__cell}>
            <div className={styles.accomplishments__image}>
              <Gradcap />
            </div>
            <p className={styles.accomplishments__copy}>
              Graduated with Distinction in the Diploma of Digital Media at
              Media Design School.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;

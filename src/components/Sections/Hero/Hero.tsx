import { useRef, useLayoutEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Iprops {
  title: string;
  copy?: string;
  imgSrc?: string;
  heroComponent?: object;
}

const Hero = ({ title, copy, imgSrc, heroComponent }: Iprops) => {
  const heroBackgroundLayer = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(heroBackgroundLayer.current, {
        yPercent: 70,
        ease: 'none',
        scrollTrigger: {
          trigger: heroBackgroundLayer.current,
          start: '0px top', // the default values
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section ref={heroBackgroundLayer} className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__copy_wrapper}>
          <h1 className={styles.hero__title}>{title as string}</h1>
          <p className={styles.hero__copy}>{copy}</p>
          <div className={styles.btn__wrapper}>
            <Link to="#" className={styles.btn__primary}>
              Visit the website
            </Link>
            <Link to="#" className={styles.btn__secondary}>
              Read more
            </Link>
          </div>
        </div>
        <div className={styles.hero__img_wrapper}>
          <>
            {heroComponent && heroComponent}
            {imgSrc && (
              <img
                onLoad={() => ScrollTrigger.refresh()}
                className={styles.hero__img}
                src={imgSrc}
              />
            )}
          </>
        </div>
      </div>
    </section>
  );
};

export default Hero;

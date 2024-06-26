import { useRef, useLayoutEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';
import { is_touch_device } from '../../../utils/utils';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Iprops {
  title: string;
  copy?: string;
  imgSrc?: string;
  heroComponent?: object;
  url: string;
  refreshPriority?: number;
}

const Hero = ({
  title,
  copy,
  imgSrc,
  heroComponent,
  url,
  refreshPriority,
}: Iprops) => {
  const heroBackgroundLayer = useRef(null);
  const headerRef = useRef(null);
  const subHeaderRef = useRef(null);
  const btnPrimaryRef = useRef(null);
  const btnSecondaryRef = useRef(null);

  const handleClickScroll = () => {
    const element = document.getElementById('scroll-to');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useLayoutEffect(() => {
    if (!is_touch_device()) {
      let ctx = gsap.context(() => {
        gsap.set(headerRef.current, {
          opacity: 0,
          y: 110,
        });
        gsap.set(subHeaderRef.current, {
          opacity: 0,
          y: 110,
        });
        gsap.set(btnPrimaryRef.current, {
          opacity: 0,
          y: 110,
        });
        gsap.set(btnSecondaryRef.current, {
          opacity: 0,
          y: 110,
        });

        gsap.to(headerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
        });
        gsap.to(subHeaderRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.4,
        });
        gsap.to(btnPrimaryRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.6,
        });
        gsap.to(btnSecondaryRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.8,
        });

        gsap.to(heroBackgroundLayer.current, {
          yPercent: 70,
          ease: 'none',
          scrollTrigger: {
            trigger: heroBackgroundLayer.current,
            start: '0px top', // the default values
            end: 'bottom top',
            scrub: true,
            refreshPriority: refreshPriority,
          },
        });
      });
      return () => ctx.revert();
    }
  }, []);
  return (
    <section ref={heroBackgroundLayer} className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__copy_container}>
          <div className={styles.hero__copy_wrapper}>
            <h1 ref={headerRef} className={styles.hero__title}>
              {title as string}
            </h1>
            <p ref={subHeaderRef} className={styles.hero__copy}>
              {copy}
            </p>
            <div className={styles.btn__wrapper}>
              <a
                ref={btnPrimaryRef}
                target="_blank"
                href={url}
                className={styles.btn__primary}
              >
                Visit the website
              </a>
              <button
                ref={btnSecondaryRef}
                onClick={() => handleClickScroll()}
                className={styles.btn__secondary}
              >
                Read more
              </button>
            </div>
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
      <div id="scroll-to"></div>
    </section>
  );
};

export default Hero;

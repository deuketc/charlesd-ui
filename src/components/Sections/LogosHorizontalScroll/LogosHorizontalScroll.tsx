import Ami from './Ami';
import Coles from './Coles';
import Lumley from './Lumley';
import State from './State';
import styles from './LogosHorizontalScroll.module.scss';
import Nrma from './Nrma';
import Nzi from './Nzi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const LogosHorizontalScroll = () => {
  const flexWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const flexWrapper = flexWrapperRef.current;
    if (!flexWrapper) return;

    const animation = gsap.to(flexWrapper, {
      left: '-75%',
      scrollTrigger: {
        trigger: flexWrapper.closest(`.${styles.container}`),
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        markers: false,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
    };
  }, [styles.container]);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.flexWrapper} ref={flexWrapperRef}>
          <div className={styles.cell}> </div>
          <div className={styles.cell}>
            <Ami />
          </div>
          <div className={styles.cell}>
            <State />
          </div>
          <div className={styles.cell}>
            <Coles />
          </div>
          <div className={styles.cell}>
            <Nzi />
          </div>
          <div className={styles.cell}>
            <Lumley />
          </div>
          <div className={styles.cell}>
            <Nrma />
          </div>
          <div className={styles.cell}> </div>
        </div>
      </div>
    </section>
  );
};

export default LogosHorizontalScroll;

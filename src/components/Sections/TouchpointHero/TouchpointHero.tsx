import { useRef, useEffect, useLayoutEffect } from 'react';
import HeroImage from '../../../assets/projects/touchpoint/touchpoint-group-hero.png';
import styles from './TouchpointHero.module.scss';
import { gsap } from 'gsap';
import { is_touch_device } from '../../../utils/utils';

const TouchpointHero = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    if (!is_touch_device()) {
      let ctx = gsap.context(() => {
        gsap.to(comp.current, {
          yPercent: 70,
          ease: 'none',
          scrollTrigger: {
            trigger: comp.current,
            start: '0px top', // the default values
            end: 'bottom top',
            scrub: true,
          },
        });
      });
      return () => ctx.revert();
    }
  });
  return (
    <div className={styles.hero} ref={comp}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.heroImage}
          src={HeroImage}
          alt="Touchpoint Hero"
        />
      </div>

      {/* <div className={styles.scrollIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          fill="none"
        >
          <path fill="#000" d="M60 77 30 47l7-7 23 23 23-23 7 7-30 30Z" />
        </svg>
      </div> */}
    </div>
  );
};

export default TouchpointHero;

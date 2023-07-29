import { useRef, useLayoutEffect } from 'react';
import styles from './SingleParallaxImage.module.scss';
import {is_touch_device} from '../../../utils/utils'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Iprops {
  image: string;
  backgroundColor?: string;
  deviceWidth?: boolean;
  scrollTriggerAni: boolean;
}

const SingleParallaxImage = ({
  image,
  backgroundColor,
  scrollTriggerAni,
}: Iprops) => {
  const containerImageRef = useRef(null);

  if (scrollTriggerAni && !is_touch_device()) {
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        gsap.to(containerImageRef.current, {
          scrollTrigger: {
            trigger: containerImageRef.current,
            pin: true,
            pinSpacing: false,
            start: 'top bottom',
            scrub: true,
            toggleClass: {
              targets: containerImageRef.current,
              className: styles.singleParallaxImage__fixed,
            },
          },
        });
      });
      return () => ctx.revert();
    }, []);
  }

  return (
    <section
      ref={containerImageRef}
      style={{
        backgroundColor: backgroundColor,
      }}
      className={styles.singleParallaxImage}
    >
      <div className={styles.singleParallaxImage__wrapper}>
        <img className={styles.singleParallaxImage__img} src={image} />
      </div>
    </section>
  );
};

export default SingleParallaxImage;

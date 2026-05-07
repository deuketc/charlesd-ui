import { useRef, useLayoutEffect } from 'react';
import styles from './SingleParallaxImage.module.scss';
import { is_touch_device } from '../../../utils/utils';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface imageObj {
  desktopSrc: string;
  mobileSrc?: string;
  tabletSrc?: string;
  portraitSrc?: string;
  ultrawideSrc?: string;
}

interface Iprops {
  image: imageObj;
  backgroundColor?: string;
  deviceWidth?: boolean;
  scrollTriggerAni: boolean;
  title?: string;
}

const SingleParallaxImage = ({
  image,
  backgroundColor,
  scrollTriggerAni,
  title = '',
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
        <h2 className={styles.title}>{title}</h2>
        <picture>
          {image.ultrawideSrc && (
            <source media="(min-width: 1920px)" srcSet={image.ultrawideSrc} />
          )}
          {image.portraitSrc && (
            <source
              media="(orientation: portrait)"
              srcSet={image.portraitSrc}
            />
          )}
          {image.mobileSrc && (
            <source media="(max-width: 767px)" srcSet={image.mobileSrc} />
          )}
          {image.tabletSrc && (
            <source
              media="(min-width: 768px) and (max-width: 1023px)"
              srcSet={image.tabletSrc}
            />
          )}
          <img
            className={styles.singleParallaxImage__img}
            src={image.desktopSrc}
            alt={title}
          />
        </picture>
      </div>
    </section>
  );
};

export default SingleParallaxImage;

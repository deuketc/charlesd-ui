import { useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);

import styles from './IpiphanyHero.module.scss';
import { is_touch_device } from '../../../utils/utils';

const ipiphanyHero = () => {
  const comp = useRef(null); // create a ref for the root level element (for scoping)
  var ipiphanytl = gsap.timeline({ paused: true });

  // SVG Refs
  const background = useRef(null);

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

  useEffect(() => {
    let ctx = gsap.context(() => {
      ipiphanytl.to(background.current, { duration: 1.5, width: '100%' });
    }, comp);

    ipiphanytl.play();
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className={styles.ipiphanyHeroContainer} ref={comp}>
      <div className={styles.ipiphanyBackgroundWhite}></div>
      <div className={styles.ipiphanyBackground} ref={background}></div>
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        width="100%"
        height="100%"
      >
        <g fill="#fff">
          <path d="M277.91 839.348v55.253h-12.097v-55.253zm25.594 0v55.253h-12.096v-55.253zm10.304 36.885h-13.29v-10.752h10.602q4.405 0 6.57-1.866 2.166-1.942 2.166-5.824 0-3.883-2.165-5.75-2.166-1.94-6.57-1.94h-10.604v-10.753h13.291q5.675 0 9.856 2.315 4.256 2.314 6.57 6.496 2.39 4.106 2.39 9.632t-2.39 9.706q-2.314 4.107-6.57 6.422-4.181 2.314-9.856 2.314m40.528-36.885v55.253H342.24v-55.253zm25.595 0v55.253h-12.096v-55.253zm10.304 36.885h-13.29v-10.752h10.602q4.405 0 6.57-1.866 2.166-1.942 2.166-5.824 0-3.883-2.166-5.75-2.165-1.94-6.57-1.94h-10.603v-10.753h13.29q5.675 0 9.857 2.315 4.256 2.314 6.57 6.496 2.39 4.106 2.39 9.632t-2.39 9.706q-2.314 4.107-6.57 6.422-4.182 2.314-9.856 2.314m40.528 18.368h-12.096v-55.253h12.096v21.803h21.354v-21.803h12.096v55.253h-12.096v-22.25h-21.354zm54.49 0h-12.618l19.712-55.253h11.797l19.637 55.253H510.94l-3.883-11.648h-17.845zm11.424-33.6L492.72 872.8h10.901L499.664 861q-.448-1.418-.896-2.912t-.597-2.464q-.15.971-.598 2.464-.373 1.42-.896 2.912m47.472 33.6h-11.946v-55.253h11.946l27.03 40.768h-3.734v-40.768h11.947v55.253h-11.947l-27.029-40.693h3.733zm62.406-20.98-18.667-34.273h13.515l9.258 17.92q.672 1.27 1.12 2.39.523 1.045.971 2.09.373-.672.672-1.344.299-.747.672-1.493.373-.822.821-1.718l9.259-17.845h13.141l-18.666 34.272v20.981h-12.096Zm68.586 20.98h-12.618l19.712-55.253h11.797l19.637 55.253h-12.842l-3.883-11.648h-17.845zm11.424-33.6-3.957 11.798h10.901L689.552 861q-.448-1.418-.896-2.912t-.597-2.464q-.15.971-.598 2.464-.373 1.42-.896 2.912m47.622-21.653v55.253H722.09v-55.253z" />
          <g transform="translate(-1589.466 -1513.184)scale(4.28)">
            <circle cx="488.193" cy="413.114" r="18" />
            <path d="M488.193 440.324a18 18 0 0 0-18 18v45.926a18 18 0 0 0 18 18 18 18 0 0 0 18-18v-45.926a18 18 0 0 0-18-18" />
          </g>
        </g>
      </svg>
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
    </div>
  );
};

export default ipiphanyHero;

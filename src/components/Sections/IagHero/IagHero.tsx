import { useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);

import styles from './IagHero.module.scss';
import { is_touch_device } from '../../../utils/utils';

const iagHero = () => {
  const comp = useRef(null); // create a ref for the root level element (for scoping)
  var iagtl = gsap.timeline({ paused: true });

  // SVG Refs
  const background = useRef(null);

  const i1 = useRef(null);
  const i2 = useRef(null);

  const a1 = useRef(null);
  const a2 = useRef(null);

  const g1 = useRef(null);
  const g2 = useRef(null);
  const g3 = useRef(null);
  const g4 = useRef(null);

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
      iagtl

        //       .set(g1.current, {
        //         transformOrigin: 'center center',
        //         rotation: -90,
        //       })
        //       .set(g2.current, {
        //         transformOrigin: 'center center',
        //         rotation: 90,
        //       })
        //       .set(i2.current, { scale: 0, transformOrigin: 'center center' })

        .to(background.current, { duration: 1.5, width: '100%' });

      //       .fromTo(
      //         g1.current,
      //         { drawSVG: '100% 100%' },
      //         { duration: 0.5, drawSVG: '0% 100% ', ease: 'none' },
      //         0.4
      //       )
      //       .fromTo(
      //         g2.current,
      //         { drawSVG: '0% 0%' },
      //         { duration: 0.75, drawSVG: '100% 0% ' },
      //         0.9
      //       )
      //       .fromTo(
      //         g3.current,
      //         { drawSVG: '0% 0%' },
      //         { duration: 0.2, drawSVG: '100% 0% ', ease: 'none' },
      //         1.15
      //       )
      //       .fromTo(
      //         g4.current,
      //         { drawSVG: '0% 0%' },
      //         { duration: 0.3, drawSVG: '100% 0% ' },
      //         1.35
      //       )
      //       .fromTo(
      //         a1.current,
      //         { drawSVG: '0% 0%' },
      //         { duration: 0.5, drawSVG: '100% 0% ' },
      //         1
      //       )
      //       .fromTo(
      //         a2.current,
      //         { drawSVG: '100% 100%' },
      //         { duration: 0.75, drawSVG: '0% 100% ' },
      //         1.2
      //       )
      //       .fromTo(
      //         i1.current,
      //         { drawSVG: '0% 0%' },
      //         { duration: 0.5, drawSVG: '100% 0% ' },
      //         1.6
      //       )

      //.to(i2.current, { scale: 1, duration: 1, ease: 'elastic.out' }, 2.05);
    }, comp);

    iagtl.play();
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className={styles.iagHeroContainer} ref={comp}>
      <div className={styles.iagPurpleBackground} ref={background}></div>

      <svg
        className={styles.aniSvg}
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        width="600"
        height="498"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 600 498"
      >
        <path
          id="i1"
          ref={i1}
          stroke="#fff"
          strokeDasharray="none"
          strokeDashoffset="16"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="56"
          d="M55.861 315.901V101.865"
        />
        <circle
          id="i2"
          ref={i2}
          cx="55.584"
          cy="51.553"
          r="32.047"
          fill="#fff"
          stroke="none"
          strokeDashoffset="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="9.215"
          opacity="1"
        />
        <path
          id="a1"
          ref={a1}
          stroke="#fff"
          strokeDasharray="none"
          strokeDashoffset="16"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="56"
          d="M304.092 315.901V101.865"
        />
        <circle
          id="a2"
          ref={a2}
          cx="215.319"
          cy="208.662"
          r="85.259"
          fill="none"
          stroke="#fff"
          strokeDasharray="none"
          strokeDashoffset="16"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="51"
        />
        <circle
          id="g1"
          ref={g1}
          cx="465.66"
          cy="391.202"
          r="60.375"
          fill="none"
          stroke="#fff"
          strokeDasharray="none"
          strokeDashoffset="16"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="51"
          display="inline"
        />
        <circle
          id="g2"
          ref={g2}
          cx="465.027"
          cy="208.285"
          r="85.259"
          fill="none"
          stroke="#fff"
          strokeDasharray="none"
          strokeDashoffset="16"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="51"
          display="inline"
        />
        <path
          id="g3"
          ref={g3}
          stroke="#fff"
          strokeDasharray="none"
          strokeDashoffset="16"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="25.25"
          d="M467.028 110.15h55"
        />
        <path
          id="g4"
          ref={g4}
          stroke="#fff"
          strokeDasharray="none"
          strokeDashoffset="16"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="57.125"
          d="M521.796 126.088h53.232"
        />
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

export default iagHero;

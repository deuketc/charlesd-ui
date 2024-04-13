import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);
import styles from './IagHero.module.scss';

const iagHero = () => {
  const comp = useRef(null); // create a ref for the root level element (for scoping)
  var iagtl = gsap.timeline({ paused: true });

  // SVG Refs
  const theMask = useRef(null);
  const hide01 = useRef(null);
  const hide02 = useRef(null);
  const hide03 = useRef(null);
  const hide04 = useRef(null);
  const hide05 = useRef(null);
  const hide06 = useRef(null);
  const iCircle01 = useRef(null);
  const background = useRef(null);
  const theMaskRect = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      iagtl

        .set(hide01.current, {
          transformOrigin: 'center center',
          rotation: -90,
        })
        .set(hide03.current, {
          transformOrigin: 'center center',
          rotation: -65,
        })
        .set(iCircle01.current, { scale: 0, transformOrigin: 'center center' })

        .from(theMaskRect.current, { x: 1024, duration: 1.5 }, 0)
        .from(background.current, { x: 1024, duration: 1.5 }, 0)

        // I
        .to(
          hide01.current,
          { duration: 0.5, drawSVG: '0% 0%', ease: 'none' },
          0.3
        )
        .fromTo(
          hide03.current,
          1,
          { drawSVG: '0% 100%' },
          { drawSVG: '100% 100% ' },
          0.6
        )
        .fromTo(
          hide02.current,
          0.3,
          { drawSVG: '0% 100%' },
          { drawSVG: '100% 100% ' },
          0.8
        )

        // A
        .fromTo(
          hide04.current,
          0.5,
          { drawSVG: '0% 100%' },
          { drawSVG: '100% 100% ' },
          0.8
        )
        .fromTo(
          hide05.current,
          0.8,
          { drawSVG: '0% 100%' },
          { drawSVG: '100% 100% ' },
          1.1
        )

        // G
        .fromTo(
          hide06.current,
          0.6,
          { drawSVG: '0% 100%' },
          { drawSVG: '100% 100% ' },
          1.5
        )
        .to(iCircle01.current, { scale: 1, duration: 1, ease: 'elastic.out' });
    }, comp); // <- IMPORTANT! Scopes selector text

    iagtl.play();
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div ref={comp}>
      <svg
        preserveAspectRatio="xMidYMid meet"
        className={styles.aniSvg}
        id="ani-svg"
        width="1024px"
        height="1024px"
        viewBox="0 0 1024 1024"
      >
        <defs>
          <mask id="theMask" ref={theMask}>
            <rect
              ref={theMaskRect}
              id="theMaskRect"
              x="1"
              y="4"
              fill="#ffffff"
              width="1024"
              height="1024"
            />
          </mask>
        </defs>

        <g id="layer1">
          <rect
            ref={background}
            id="background"
            x="1"
            y="4"
            fill="#592C82"
            width="1024"
            height="1024"
          />
        </g>
        <g id="logo" mask="url(#theMask)">
          <g id="i">
            <line
              id="i-stroke-01"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="73"
              strokeMiterlimit="10"
              x1="199.5"
              y1="598"
              x2="199.5"
              y2="324"
            />
            <line
              ref={hide06}
              id="hide-06"
              fill="none"
              stroke="#592C82"
              strokeWidth="86"
              strokeMiterlimit="10"
              x1="201"
              y1="602"
              x2="201"
              y2="320"
            />
            <circle
              id="i-circle-01"
              ref={iCircle01}
              fill="#FFFFFF"
              cx="199.837"
              cy="260.072"
              r="39.793"
            />
          </g>
          <g id="a">
            <g id="a-stroke-01">
              <path
                fill="#FFFFFF"
                d="M403.333,384C445.675,384,480,418.325,480,460.667s-34.325,76.667-76.667,76.667
           s-76.667-34.325-76.667-76.667S360.992,384,403.333,384 M403.333,319c-19.096,0-37.656,3.754-55.163,11.159
           c-16.877,7.139-32.021,17.344-45.01,30.334c-12.99,12.989-23.195,28.133-30.334,45.01c-7.405,17.507-11.159,36.067-11.159,55.163
           s3.754,37.656,11.159,55.163c7.139,16.878,17.344,32.021,30.334,45.011c12.989,12.989,28.133,23.195,45.01,30.334
           c17.507,7.404,36.067,11.159,55.163,11.159s37.656-3.755,55.163-11.159c16.877-7.139,32.021-17.345,45.01-30.334
           s23.195-28.133,30.334-45.011C541.245,498.322,545,479.763,545,460.667s-3.755-37.656-11.159-55.163
           c-7.139-16.877-17.345-32.021-30.334-45.01c-12.989-12.99-28.133-23.195-45.01-30.334C440.989,322.754,422.43,319,403.333,319
           L403.333,319z"
              />
            </g>
            <path
              ref={hide05}
              id="hide-05"
              fill="none"
              stroke="#592C82"
              strokeWidth="71"
              strokeMiterlimit="10"
              d="M509,460.667
         c0,0-2-110.167-105.667-110.167C297.5,350.5,293,460.667,293,460.667S302.5,568.5,403,568.5c107,0,105.79-111.601,105.79-111.601"
            />

            <line
              id="a-stroke-02"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="73"
              strokeMiterlimit="10"
              x1="517.5"
              y1="598"
              x2="517.5"
              y2="324"
            />

            <line
              ref={hide04}
              id="hide-04"
              fill="none"
              stroke="#592C82"
              strokeWidth="86"
              strokeMiterlimit="10"
              x1="518"
              y1="602"
              x2="518"
              y2="320"
            />
          </g>
          <g id="g">
            <line
              id="g-stroke-01"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="73"
              strokeMiterlimit="10"
              x1="757"
              y1="355.5"
              x2="865"
              y2="355.5"
            />

            <line
              id="g-stroke-02"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="63"
              strokeMiterlimit="10"
              x1="722"
              y1="350.5"
              x2="757"
              y2="350.5"
            />
            <line
              ref={hide02}
              id="hide-02"
              fill="none"
              stroke="#592C82"
              strokeWidth="86"
              strokeMiterlimit="10"
              x1="708"
              y1="355"
              x2="876"
              y2="355"
            />
            <g id="g-stroke-04">
              <path
                fill="#FFFFFF"
                d="M724.02,649.453c24.593,0,44.527,19.936,44.527,44.527c0,24.593-19.935,44.529-44.527,44.529
           c-24.594,0-44.529-19.937-44.529-44.529C679.49,669.389,699.426,649.453,724.02,649.453 M724.02,584.453
           c-29.257,0-56.762,11.393-77.448,32.079c-20.688,20.687-32.081,48.192-32.081,77.448s11.393,56.762,32.08,77.448
           c20.687,20.688,48.192,32.081,77.449,32.081s56.763-11.394,77.449-32.082c20.686-20.687,32.078-48.191,32.078-77.447
           s-11.393-56.761-32.079-77.447C780.781,595.846,753.275,584.453,724.02,584.453L724.02,584.453z"
              />
            </g>
            <path
              ref={hide03}
              id="hide-03"
              fill="none"
              stroke="#592C82"
              strokeWidth="76"
              strokeMiterlimit="10"
              d="M799.333,695.519
         c0,0-1.413-77.864-74.684-77.864c-74.803,0-77.982,77.864-77.982,77.864s6.714,76.215,77.746,76.215
         c75.626,0,74.772-78.878,74.772-78.878"
            />
            <g id="g-stroke-03">
              <path
                fill="#FFFFFF"
                d="M722.334,384C764.676,384,799,418.325,799,460.667s-34.324,76.667-76.666,76.667
           s-76.667-34.325-76.667-76.667S679.992,384,722.334,384 M722.334,319c-19.096,0-37.655,3.754-55.163,11.159
           c-16.877,7.139-32.021,17.344-45.011,30.333c-12.989,12.99-23.195,28.133-30.333,45.011c-7.405,17.507-11.16,36.067-11.16,55.163
           s3.755,37.656,11.16,55.164c7.138,16.877,17.344,32.021,30.333,45.01c12.99,12.989,28.134,23.195,45.011,30.334
           c17.508,7.404,36.067,11.159,55.163,11.159c19.097,0,37.656-3.755,55.163-11.159c16.877-7.139,32.021-17.345,45.011-30.334
           c12.989-12.989,23.194-28.134,30.333-45.011C860.245,498.322,864,479.763,864,460.667s-3.755-37.655-11.159-55.163
           c-7.139-16.877-17.344-32.021-30.333-45.011c-12.99-12.989-28.134-23.195-45.011-30.333C759.99,322.754,741.431,319,722.334,319
           L722.334,319z"
              />
            </g>
            <path
              id="hide-01"
              ref={hide01}
              fill="none"
              stroke="#592C82"
              strokeWidth="76"
              strokeMiterlimit="10"
              d="M830,461.667
         c0,0-2-110.167-105.666-110.167C618.5,351.5,614,461.667,614,461.667S623.5,569.5,724,569.5c107,0,105.79-111.601,105.79-111.601"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default iagHero;

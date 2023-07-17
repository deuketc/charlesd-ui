import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

const LogoRedux = () => {
  const svgSwooshLeft = useRef(null);
  const svgSwooshLeftHide = useRef(null);
  const svgSwooshRight = useRef(null);
  const svgSwooshRightHide = useRef(null);
  const svgSwooshTop = useRef(null);
  const svgSwooshTopHide = useRef(null);
  const svgBackGround = useRef(null);
  const svgBallTop = useRef(null);
  const svgBallLeft = useRef(null);
  const svgBallRight = useRef(null);
  const svgBallPath3 = useRef(null);
  const svgBallPath2 = useRef(null);
  const svgBallPath1 = useRef(null);
  const svgSwooshLeftPath = useRef(null);
  const svgSwooshRightPath = useRef(null);
  const svgSwooshTopPath = useRef(null);
  const svgBallMoveLeft = useRef(null);
  const svgBallMoveTop = useRef(null);
  const svgBallMoveRight = useRef(null);
  const svgHideAnimation = useRef(null);
  const svgHideStock = useRef(null);

  //Group
  const svgBalls = useRef(null);

  const swooshDuration = 0.5;
  const spinDuration = 2;
  var reduxtl = gsap.timeline({ paused: true });

  useEffect(() => {
    reduxtl
      .to(svgHideStock.current, { delay: 0.001 })
      .set(svgHideStock.current, { opacity: 0 })
      .set(svgHideAnimation.current, { opacity: 0 })
      .set(svgBallTop.current, {
        scale: 0,
        transformOrigin: 'center center',
      })
      .set(svgBallRight.current, { opacity: 0 })
      .set(svgBallLeft.current, { opacity: 0 })
      .set(svgBallMoveLeft.current, { opacity: 0 })
      .set(svgBallMoveRight.current, { opacity: 0 })
      .set(svgBallMoveTop.current, { opacity: 0 })
      .to(svgBallTop.current, {
        delay: 0.5,
        duration: 1.2,
        scale: 1,
        ease: 'elastic.out',
      })

      /*************************************/
      // SPIN
      /************************************/
      .add('start-spin')
      .set(svgBallRight.current, { opacity: 1 })
      .set(svgBallLeft.current, { opacity: 1 })

      .to(
        svgBallTop.current,
        {
          duration: spinDuration,
          ease: 'power1.in',
          motionPath: {
            path: svgBallPath1.current,
            align: svgBallPath1.current,
            alignOrigin: [0.5, 0.5],
            start: 1,
            end: 0,
          },
        },
        'start-spin'
      )
      .to(
        svgBallRight.current,
        {
          duration: spinDuration,
          ease: 'power1.in',
          motionPath: {
            path: svgBallPath2.current,
            align: svgBallPath2.current,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1,
          },
        },
        'start-spin'
      )
      .to(
        svgBallLeft.current,
        {
          duration: spinDuration,
          ease: 'power1.in',
          motionPath: {
            path: svgBallPath3.current,
            align: svgBallPath3.current,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1,
          },
        },
        'start-spin'
      )
      .to(
        svgBalls.current,
        {
          duration: spinDuration,
          rotation: -1000,
          transformOrigin: 'center center',
          ease: 'power1.in',
        },
        'start-spin'
      )

      /**********************************/
      // Lines
      /**********************************/
      .add('start-lines')
      .set(svgBalls.current, { opacity: 0 }, 'start-lines')
      .set(svgBallMoveLeft.current, { opacity: 1 })
      .set(svgBallMoveRight.current, { opacity: 1 })
      .set(svgBallMoveTop.current, { opacity: 1 })
      .set(svgSwooshLeft.current, { opacity: 0 })
      .set(svgSwooshRight.current, { opacity: 0 })
      .set(svgSwooshTop.current, { opacity: 0 })
      .to(
        svgSwooshTopHide.current,
        { duration: swooshDuration, drawSVG: '0% 0%' },
        'start-lines'
      )
      .to(
        svgSwooshLeftHide.current,
        { duration: swooshDuration, drawSVG: '0% 0%' },
        'start-lines'
      )
      .to(
        svgSwooshRightHide.current,
        { duration: swooshDuration, drawSVG: '0% 0%' },
        'start-lines'
      )

      /**********************************/
      // balls move
      /**********************************/
      .to(
        svgSwooshLeft.current,
        {
          duration: swooshDuration,
          opacity: 1,
        },
        'start-lines'
      )
      .to(
        svgSwooshTop.current,
        {
          duration: swooshDuration,
          opacity: 1,
        },
        'start-lines'
      )
      .to(
        svgSwooshRight.current,
        {
          duration: swooshDuration,
          opacity: 1,
        },
        'start-lines'
      )
      .to(
        svgBallMoveLeft.current,
        {
          duration: swooshDuration,
          motionPath: {
            path: svgSwooshLeftPath.current,
            align: svgSwooshLeftPath.current,
            alignOrigin: [0.5, 0.5],
            start: 1,
            end: 0.003,
          },
        },
        'start-lines'
      )
      .to(
        svgBallMoveTop.current,
        {
          duration: swooshDuration,
          motionPath: {
            path: svgSwooshTopPath.current,
            align: svgSwooshTopPath.current,
            alignOrigin: [0.5, 0.5],
            start: 1,
            end: 0,
          },
        },
        'start-lines'
      )
      .to(
        svgBallMoveRight.current,
        {
          duration: swooshDuration,
          motionPath: {
            path: svgSwooshRightPath.current,
            align: svgSwooshRightPath.current,
            alignOrigin: [0.5, 0.5],
            start: 1,
            end: 0,
          },
          onComplete: () => {
            reduxtl.play(0);
            reduxtl.pause();
          },
        },
        'start-lines'
      );
  }, []);
  const onMouseEnter = () => {
    reduxtl.play();
  };

  return (
    <svg
      id="ani-svg"
      xmlns="http://www.w3.org/2000/svg"
      width="1000"
      height="1000"
      viewBox="0 0 1000 1000"
      onMouseEnter={() => onMouseEnter()}
    >
      <g id="animation">
        <g id="lines">
          <path
            ref={svgSwooshLeft}
            id="swoosh-left"
            fill="#764ABC"
            d="M609.458,629.625c-34.621,68.229-89.204,121.207-168.635,162.961
        c-53.972,28.514-109.979,38.699-165.985,31.57c-45.825-6.111-81.468-26.477-103.874-60.086
        c-32.585-49.898-35.638-103.873-8.143-157.846c19.349-38.697,49.896-67.213,69.245-81.469
        c-4.073-13.24-10.185-35.643-13.238-51.935C71.169,579.746,86.446,724.355,131.252,792.586
        c33.604,50.92,101.832,82.488,177.188,82.488c20.365,0,40.73-2.037,61.099-7.125c130.348-25.463,230.622-105.792,286.626-220.866
        L609.458,629.625z"
          />
          <path
            ref={svgSwooshLeftHide}
            id="swoosh-left-hide"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="64"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="
        M644.331,616.604C573.587,806.075,262.87,961.171,143.666,771.666c-104-165.334,112.508-298.229,112.508-298.229"
          />
          <path
            ref={svgSwooshRight}
            id="swoosh-right"
            fill="#764ABC"
            d="M833.588,524.441c-77.395-90.637-191.446-140.535-321.794-140.535H495.5l2.035,48.881
        h18.332c77.395,0,150.713,22.404,216.905,66.193c50.915,33.607,87.577,77.396,107.943,130.352
        c17.31,42.771,16.29,84.523-2.039,120.168c-28.513,53.971-76.372,83.506-139.509,83.506c-40.734,0-79.432-12.223-99.8-21.389
        c-11.199,10.186-31.567,26.477-45.824,36.666c43.79,20.365,88.598,31.568,131.367,31.568c97.758,0,170.06-53.977,197.555-107.947
        C911.998,712.836,909.959,611,833.588,524.441L833.588,524.441z"
          />
          <path
            ref={svgSwooshRightHide}
            id="swoosh-right-hide"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="64"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="
        M465.95,416.143c197.854-41.929,476.27,127.678,392.893,335.451c-76.706,191.155-305.507,68.934-305.507,68.934"
          />
          <path
            ref={svgSwooshTop}
            id="swoosh-top"
            fill="#764ABC"
            d="M364.138,609.98c-41.752-69.25-59.063-144.606-52.953-226.077
        c4.07-61.102,24.438-114.058,60.08-157.848c29.53-37.68,86.557-56.011,125.255-57.027
        c107.941-2.038,153.763,132.385,156.821,186.36c13.239,3.055,35.642,10.185,50.919,15.276
        c-12.224-164.972-114.056-250.516-211.813-250.516c-91.651,0-176.172,66.194-209.779,163.956
        c-46.841,130.352-16.291,255.61,40.734,354.393C323.402,638.498,366.17,608.961,364.138,609.98z"
          />
          <path
            ref={svgSwooshTopHide}
            id="swoosh-top-hide"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="64"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="
        M368.334,659.666c-127.341-159.881-108.228-485.053,95.762-513.552c203.989-28.499,214.489,228.214,214.489,228.214"
          />
        </g>
        <g ref={svgBalls} id="balls">
          <circle
            ref={svgBackGround}
            id="bkground"
            opacity="0"
            fill="#E6E6E6"
            cx="493"
            cy="569"
            r="263.988"
          />
          <circle
            ref={svgBallTop}
            id="ball-top"
            fill="#764ABC"
            cx="494"
            cy="568"
            r="56.96"
          />
          <circle
            ref={svgBallLeft}
            id="ball-left"
            fill="#764ABC"
            cx="494"
            cy="568"
            r="56.96"
          />
          <circle
            ref={svgBallRight}
            id="ball-right"
            fill="#764ABC"
            cx="494"
            cy="568"
            r="56.96"
          />
          <g id="paths">
            <path
              ref={svgBallPath3}
              id="ball-path-3"
              fill="none"
              d="M493,569h265"
            />
            <path
              ref={svgBallPath2}
              id="ball-path-2"
              fill="none"
              d="M493,569L359.218,341.375"
            />
            <path
              ref={svgBallPath1}
              id="ball-path-1"
              fill="none"
              d="M360.218,795.625L494,568"
            />
          </g>
        </g>
        <g id="balls-move">
          <path
            ref={svgSwooshLeftPath}
            id="swoosh-left-path"
            fill="none"
            d="M649.666,591.334c-72.083,229.488-388.868,358.294-499.058,193.743
        c-112.495-167.992,105.565-311.64,105.565-311.64"
          />
          <path
            ref={svgSwooshRightPath}
            id="swoosh-right-path"
            fill="none"
            d="M445.188,410.188c197.854-41.929,499.54,129.067,416.163,336.84
        c-76.706,191.155-308.015,75.499-308.015,75.499"
          />
          <path
            ref={svgSwooshTopPath}
            id="swoosh-top-path"
            fill="none"
            d="M373,666c-142-170-112.893-491.387,91.097-519.886
        c203.989-28.499,214.489,228.214,214.489,228.214"
          />
          <ellipse
            ref={svgBallMoveLeft}
            id="ball-move-left"
            fill="#764ABC"
            cx="648.084"
            cy="593.603"
            rx="56.877"
            ry="57.19"
          />
          <circle
            ref={svgBallMoveTop}
            id="ball-move-top"
            fill="#764ABC"
            cx="373.313"
            cy="666.313"
            r="57.273"
          />
          <circle
            ref={svgBallMoveRight}
            id="ball-move-right"
            fill="#764ABC"
            cx="445.188"
            cy="410.188"
            r="57.148"
          />
        </g>
      </g>
      <g id="Layer_7">
        <rect
          ref={svgHideAnimation}
          id="hide-animation"
          fill="#FFFFFF"
          width="1000"
          height="1000"
        />
      </g>
      <g ref={svgHideStock} id="stock">
        <rect
          x="99"
          y="100"
          opacity="0"
          fill="#F7DF1E"
          width="802"
          height="800"
        />
        <path
          fill="#764ABC"
          d="M654.359,650.719c29.531-3.059,51.936-28.514,50.915-59.068c-1.015-30.549-26.477-54.988-57.025-54.988
      h-2.035c-31.571,1.016-56.01,27.494-54.989,59.063c1.019,15.275,7.125,28.514,16.29,37.682
      c-34.621,68.229-87.573,118.129-167.004,159.883c-53.972,28.514-109.979,38.699-165.985,31.57
      c-45.825-6.111-81.468-26.477-103.874-60.086c-32.585-49.898-35.638-103.873-8.143-157.846
      c19.349-38.697,49.896-67.213,69.245-81.469c-4.073-13.24-10.185-35.643-13.238-51.935
      C70.857,580.449,86.133,725.059,130.94,793.289c33.604,50.92,101.832,82.488,177.188,82.488c20.365,0,40.73-2.037,61.099-7.125
      C499.575,843.189,598.354,765.793,654.359,650.719L654.359,650.719z M833.588,524.441
      c-77.395-90.637-191.446-140.535-321.794-140.535H495.5c-9.166-18.33-28.514-30.552-49.898-30.552h-2.038
      c-31.564,1.019-56.004,27.495-54.987,59.067c1.019,30.551,26.477,54.991,57.025,54.991h2.035
      c22.403-1.019,41.753-15.276,49.898-34.625h18.332c77.395,0,150.713,22.404,216.905,66.193
      c50.915,33.607,87.577,77.396,107.943,130.352c17.31,42.771,16.29,84.523-2.039,120.168
      c-28.513,53.971-76.372,83.506-139.509,83.506c-40.734,0-79.432-12.223-99.8-21.389c-11.199,10.186-31.567,26.477-45.824,36.666
      c43.79,20.365,88.598,31.568,131.367,31.568c97.758,0,170.06-53.977,197.555-107.947C911.998,712.836,909.959,611,833.588,524.441
      L833.588,524.441z M316.275,668.027c1.019,30.553,26.476,54.99,57.025,54.99h2.039c31.567-1.016,56.005-27.496,54.986-59.063
      c-1.016-30.553-26.476-54.994-57.025-54.994h-2.035c-2.038,0-5.095,0-7.127,1.02c-41.752-69.25-59.063-144.606-52.953-226.077
      c4.07-61.102,24.438-114.058,60.08-157.848c29.53-37.68,86.557-56.011,125.255-57.027
      c107.941-2.038,153.763,132.385,156.821,186.36c13.239,3.055,35.642,10.185,50.919,15.276
      c-12.224-164.972-114.056-250.516-211.813-250.516c-91.651,0-176.172,66.194-209.779,163.956
      c-46.841,130.352-16.291,255.61,40.734,354.393c-5.09,7.125-8.146,18.33-7.127,29.533V668.027z"
        />
      </g>
    </svg>
  );
};

export default LogoRedux;

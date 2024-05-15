import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

const LogoReact = () => {
  const circle = useRef(null);
  const circleContainer = useRef<SVGRectElement>(null);

  const pathAnimationDuration = 1;
  let reacttl = gsap.timeline();

  useLayoutEffect(() => {
    reacttl = gsap.timeline({ paused: true });
    // @ts-ignore
    reacttl
      .set('#logoWrapper', {
        transformOrigin: '70.5% 70.5%',
      })

      .set('#gradiant01', {
        scale: 0,
        transformOrigin: '50% 50%',
      })

      .set('#gradiant02', {
        scale: 0,
        transformOrigin: '50% 50%',
      })

      .set('#gradiant03', {
        scale: 0,
        transformOrigin: '50% 50%',
      })

      /*************************************/
      // START
      /************************************/

      .add('start')
      .to(
        '#logopath03',
        pathAnimationDuration / 2,
        { strokeDasharray: '0, 1877', ease: 'none' },
        'start'
      )
      .add('path02')
      .set('#logopath03', { opacity: '0' })
      .to('#gradiant03', {
        duration: pathAnimationDuration,
        motionPath: { path: '#clearpath03', start: -0, end: -1 },
        ease: 'none',
        repeat: -1,
      })
      .to(
        '#whitepath03',
        pathAnimationDuration,
        { strokeDashoffset: '1877', ease: 'none', repeat: -1 },
        '<'
      )
      .to('#gradiant03', { scale: 1 }, '<')

      .to(
        '#logopath02',
        pathAnimationDuration / 2,
        { strokeDasharray: '0, 1877', ease: 'none' },
        `path02`
      )
      .add('path03')
      .set('#logopath02', { opacity: '0' })
      .to('#gradiant02', {
        duration: pathAnimationDuration,
        motionPath: { path: '#clearpath02', start: -0, end: -1 },
        ease: 'none',
        repeat: -1,
      })
      .to(
        '#whitepath02',
        pathAnimationDuration,
        { strokeDashoffset: '1877', ease: 'none', repeat: -1 },
        '<'
      )
      .to('#gradiant02', { scale: 1 }, '<')

      .to(
        '#logopath01',
        pathAnimationDuration / 2,
        { strokeDasharray: '0, 1877', ease: 'none' },
        `path03`
      )
      .set('#logopath01', { opacity: '0' })
      .to('#gradiant01', {
        duration: pathAnimationDuration,
        motionPath: { path: '#clearpath01', start: -0, end: -1 },
        ease: 'none',
        repeat: -1,
      })
      .to(
        '#whitepath01',
        pathAnimationDuration,
        { strokeDashoffset: '1877', ease: 'none', repeat: -1 },
        '<'
      )
      .to('#gradiant01', { scale: 1 }, '<');
  }, []);

  const onMouseEnter = () => {
    reacttl.play();
  };

  const onMouseLeave = () => {
    reacttl.restart().pause();
  };

  const onMouseCircleMove = (e: any) => {
    if (circleContainer.current) {
      const { left, top, width, height } =
        circleContainer.current.getBoundingClientRect();

      const halfW = width / 2;
      const halfH = height / 2;
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;

      const x = gsap.utils.interpolate(-halfW, halfW, mouseX / width);
      const y = gsap.utils.interpolate(-halfH, halfH, mouseY / height);

      gsap.to(circle.current, {
        x: x,
        y: y,
        scale: 0.8,
        duration: 0.6,
        ease: 'power1',
        overwrite: true,
      });
    }
  };
  const onMouseCircleLeave = () => {
    gsap.to(circle.current, {
      x: 0,
      y: 0,
      scale: 1,
      ease: 'power3',
      duration: 0.6,
      overwrite: true,
    });
  };

  return (
    <svg
      id="ani-svg"
      className="logoReact"
      xmlns="http://www.w3.org/2000/svg"
      width="1000"
      height="1000"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 1000 1000"
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
    >
      <g id="logoWrapper">
        <radialGradient
          id="gradiantradial"
          cx="0"
          cy="0"
          r="387.554"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".449" stopColor="#53c1de" />
          <stop offset=".569" stopColor="#56c2df" stopOpacity=".7821" />
          <stop offset=".654" stopColor="#5fc5e0" stopOpacity=".6278" />
          <stop offset=".728" stopColor="#6fcbe3" stopOpacity=".4931" />
          <stop offset=".796" stopColor="#85d3e8" stopOpacity=".3696" />
          <stop offset=".86" stopColor="#a1dded" stopOpacity=".2538" />
          <stop offset=".921" stopColor="#c4eaf4" stopOpacity=".1437" />
          <stop offset=".978" stopColor="#edf9fc" stopOpacity=".0401" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>

        <g id="gradiant01mask">
          <g mask="url(#whitepath01mask)">
            <circle
              id="gradiant01"
              cx="0"
              cy="0"
              r="387.554"
              fill="url(#gradiantradial)"
            />
          </g>
          <g mask="url(#whitepath02mask)">
            <circle
              id="gradiant02"
              cx="0"
              cy="0"
              r="387.554"
              fill="url(#gradiantradial)"
            />
          </g>
          <g mask="url(#whitepath03mask)">
            <circle
              id="gradiant03"
              cx="0"
              cy="0"
              r="387.554"
              fill="url(#gradiantradial)"
            />
          </g>
        </g>

        <g
          id="whitepaths"
          fill="none"
          stroke="#FFF"
          strokeMiterlimit="10"
          strokeWidth="35"
        >
          <mask id="whitepath01mask">
            <path
              id="whitepath01"
              d="M500 320.613c219.6 0 397.625 80.11 397.625 178.931 0 98.821-178.024 178.931-397.625 178.931-219.602 0-397.624-80.11-397.624-178.931.001-98.821 178.023-178.931 397.624-178.931z"
            />
          </mask>
          <mask id="whitepath02mask">
            <path
              id="whitepath02"
              d="M654.96 410.079c109.8 190.18 129.432 384.406 43.853 433.817-85.581 49.409-243.97-64.705-353.77-254.887-109.802-190.181-129.437-384.408-43.855-433.819 85.582-49.409 243.971 64.708 353.772 254.889z"
            />
          </mask>
          <mask id="whitepath03mask">
            <path
              id="whitepath03"
              strokeLinejoin="round"
              d="M654.96 589.01C545.159 779.191 386.77 893.306 301.188 843.896c-85.582-49.411-65.947-243.638 43.855-433.817 109.8-190.181 268.188-304.298 353.77-254.888 85.579 49.411 65.947 243.638-43.853 433.819z"
            />
          </mask>
        </g>

        <g id="clearpaths" fill="none">
          <path
            id="clearpath01"
            d="M499.999 321.026c219.602 0 397.625 80.11 397.625 178.931 0 98.82-178.023 178.93-397.625 178.93-219.601 0-397.623-80.109-397.623-178.93 0-98.821 178.022-178.931 397.623-178.931z"
          />
          <path
            id="clearpath02"
            d="M654.959 410.492c109.8 190.179 129.433 384.406 43.852 433.816-85.58 49.409-243.968-64.705-353.77-254.887-109.801-190.18-129.435-384.407-43.854-433.817 85.582-49.41 243.971 64.707 353.772 254.888z"
          />
          <path
            id="clearpath03"
            d="M654.959 589.422c-109.801 190.182-268.19 304.296-353.772 254.887-85.581-49.41-65.947-243.638 43.854-433.816 109.801-190.181 268.189-304.298 353.77-254.888 85.581 49.41 65.948 243.637-43.852 433.817z"
          />
        </g>
        <g id="Logo">
          <circle
            ref={circle}
            id="circle01"
            cx="500"
            cy="499.957"
            r="82.701"
            fill="#53C1DE"
          />
          <path
            id="logopath01"
            fill="none"
            stroke="#53C1DE"
            strokeLinecap="round"
            strokeMiterlimit="19"
            strokeWidth="45"
            d="M500 321.026c219.601 0 397.625 80.11 397.625 178.931S719.601 678.886 500 678.886c-219.602 0-397.624-80.108-397.624-178.929S280.398 321.026 500 321.026z"
          />
          <path
            id="logopath02"
            fill="none"
            stroke="#53C1DE"
            strokeLinecap="round"
            strokeMiterlimit="19"
            strokeWidth="45"
            d="M654.96 410.492c109.799 190.179 129.432 384.406 43.853 433.817-85.582 49.409-243.97-64.706-353.771-254.888-109.802-190.18-129.436-384.408-43.854-433.818 85.581-49.409 243.97 64.708 353.772 254.889z"
          />
          <path
            id="logopath03"
            fill="none"
            stroke="#53C1DE"
            strokeLinecap="round"
            strokeMiterlimit="19"
            strokeWidth="45"
            d="M654.96 589.422C545.158 779.604 386.769 893.719 301.188 844.31c-85.581-49.411-65.947-243.639 43.854-433.817 109.8-190.182 268.188-304.298 353.771-254.888 85.579 49.409 65.946 243.637-43.853 433.817z"
          />
        </g>
        <rect
          ref={circleContainer}
          id="circleContainer"
          x="328"
          y="329"
          fill="#FFFFFF"
          width="342"
          height="342"
          opacity="0"
          onMouseMove={e => onMouseCircleMove(e)}
          onMouseLeave={() => onMouseCircleLeave()}
        />
      </g>
    </svg>
  );
};

export default LogoReact;

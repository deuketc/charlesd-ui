import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  createRef,
  Suspense,
} from 'react';
import { Canvas } from '@react-three/fiber';
import Coffee from '../components/Coffee/Coffee';
import useWindowDimensions from '../hooks/UseWindowDimensions';
import { useGLTF, Html } from '@react-three/drei';
import styles from './Landing.module.scss';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Spinner from '../components/layout/Spinner/Spinner';

const Landing = () => {
  const [footerHeight, setFooterHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const { height } = useWindowDimensions();
  const landing = useRef(null);
  const headerRef = useRef(null);
  const copyRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const footer = document.getElementsByTagName('footer')[0].clientHeight;
    const header = document.getElementsByTagName('header')[0].clientHeight;
    setFooterHeight(footer);
    setHeaderHeight(header);
  }, [height]);

  useEffect(() => {
    // Header
    gsap.set(headerRef.current, {
      opacity: 0,
      y: 80,
    });

    gsap.set(copyRef.current, {
      opacity: 0,
      y: 80,
    });

    gsap.set(buttonRef.current, {
      opacity: 0,
      y: 80,
    });

    gsap.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.2,
    });

    gsap.to(copyRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.4,
    });

    gsap.to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.6,
    });
  });

  return (
    <>
      <div
        style={{
          height: `${height - footerHeight - headerHeight}px`,
          marginTop: `${headerHeight}px`,
          marginRight: '40%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Suspense fallback={<Spinner />}>
          <Canvas
            className="r3f"
            shadows
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [-4, 3, 6],
            }}
          >
            <Coffee />
          </Canvas>
        </Suspense>
      </div>
      <div ref={landing} className={styles.landing}>
        <h1 ref={headerRef} className={styles.landing__heading}>
          Welcome to My Digital Canvas
        </h1>
        <p ref={copyRef} className={styles.landing__copy}>
          I'm Charles Deukett, a UI enthusiast who revels in the magic of
          creative web developement. Explore my digital gallery, where each
          project is a testament to my passion for crafting interactive
          experiences that captivate and inspire.
        </p>
        <Link ref={buttonRef} to="/projects" className={styles.landing__button}>
          View Projects
        </Link>
      </div>
    </>
  );
};

export default Landing;

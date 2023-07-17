import { useRef, useLayoutEffect } from 'react';
import styles from './LogosTiled.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface IProps {
  logos: string[];
}

const logosTiled = ({ logos }: IProps) => {
  const containerImageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!containerImageRef) {
        gsap.set(containerImageRef.current.children, { opacity: 0 });
        gsap.to(containerImageRef.current.children, {
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerImageRef.current,
            start: 'top 70%',
            toggleActions: 'play play reverse reverse',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.logos}>
      <div className={styles.logos__wrapper}>
        <ul ref={containerImageRef} className={styles.logoGridList}>
          {logos.map((logo, i) => {
            return (
              <li key={`logo${i}`} className={styles.logoGridList__item}>
                <img className={styles.logoGridList__itemLogo} src={logo} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default logosTiled;

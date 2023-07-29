import { useRef, useLayoutEffect } from 'react';
import styles from './LogosTiled.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { is_touch_device } from '../../../utils/utils';

gsap.registerPlugin(ScrollTrigger);

interface IProps {
  logos: string[];
}

const logosTiled = ({ logos }: IProps) => {
  const containerImageRef = useRef(null);

  useLayoutEffect(() => {
    if(!is_touch_device()) {
    let ctx = gsap.context(() => {

        gsap.set('.logoGridList .logo', { opacity: 0 });
        gsap.to('.logoGridList .logo', {
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.logoGridList',
            start:'top 40%',
            toggleActions: 'play play pause pause'
          },
        });
      
    }, containerImageRef);
    return () => ctx.revert();
  }
  }, []);

  return (
    <div className={styles.logos}>
      <div ref={containerImageRef} className={styles.logos__wrapper}>
        <ul className={`logoGridList ${styles.logoGridList}`}>
          {logos.map((logo, i) => {
            return (
              <li key={`logo-${i}`} className={`logo ${styles.logoGridList__item}`}>
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

import { useRef, useEffect, useLayoutEffect, useState, createRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useWindowDimensions from '../../../hooks/UseWindowDimensions';
import useImagesPreloader from '../../../hooks/UseImagesPreloader';
import RadioListNav from '../../layout/RadioListNav/RadioListNav';
import styles from './Mobile.module.scss';
import { RESOLUTIONS } from './../../../constants/constants';
import { is_touch_device } from '../../../utils/utils';
gsap.registerPlugin(ScrollTrigger);

interface Iprops {
  images: string[];
  backgroundColor?: string;
  refreshPriority?: number;
}

const Mobile = ({ images, backgroundColor, refreshPriority }: Iprops) => {
  const onSetActiveImage = (index: number) => {
    setActiveImage(index);
  };

  const { width } = useWindowDimensions();
  const mobilePhoneWrapper = useRef(null);

  useLayoutEffect(() => {
    if (width > 1599 && !is_touch_device()) {
      let ctx = gsap.context(() => {
        gsap.set('.mobile-phone-00', {
          x: 440,
        });
        gsap.set('.mobile-phone-02', {
          x: -440,
        });

        gsap.to('.mobile-phone-00', {
          scrollTrigger: {
            trigger: mobilePhoneWrapper.current,
            start: 'bottom bottom',
            scrub: true,
            pin: true,
            pinSpacing: true,
            toggleActions: 'restart none none none',
          },
          x: 0,
        });
        gsap.to('.mobile-phone-02', {
          scrollTrigger: {
            trigger: mobilePhoneWrapper.current,
            start: 'bottom bottom',
            scrub: true,
            toggleActions: 'restart none none none',
          },
          x: 0,
        });
      }, mobilePhoneWrapper);

      return () => ctx.revert();
    }
  }, [width]);

  const [activeImage, setActiveImage] = useState(0);

  const imgRefs = useRef(images.map(() => createRef<HTMLImageElement>()));

  useEffect(() => {
    const yValues = [-1350, -1350, -1350];

    const timelines = imgRefs.current.map((ref, index) => {
      const yTarget = yValues[index] ?? -1350;
      const tl = gsap.timeline({ repeat: -1, paused: true });
      tl.to(ref.current, { y: yTarget, duration: 30, ease: 'none' }).to(
        ref.current,
        { y: 0, duration: 30, ease: 'none' }
      );
      return tl;
    });

    const observer = new IntersectionObserver(
      ([entry]) =>
        timelines.forEach(tl =>
          entry.isIntersecting ? tl.play() : tl.pause()
        ),
      { threshold: 0 }
    );
    if (mobilePhoneWrapper.current)
      observer.observe(mobilePhoneWrapper.current);

    return () => {
      observer.disconnect();
      timelines.forEach(tl => tl.kill());
    };
  }, [images]);

  return (
    <section
      ref={mobilePhoneWrapper}
      className={styles.mobile}
      style={{ backgroundColor: backgroundColor ? backgroundColor : '#ffffff' }}
    >
      <div className={styles.mobile__wrapper}>
        <h1 className={styles.mobile__header}>mobile</h1>
        <div className={styles.mobile__container}>
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={`mobile-phone-0${index} ${
                  styles.mobile__phone_vector
                } ${
                  activeImage === index
                    ? styles['mobile__phone_vector--active']
                    : ''
                }`}
              >
                <div className={styles.mobile__img_conatiner}>
                  <img
                    ref={imgRefs.current[index]}
                    className={styles.mobile__img}
                    src={image}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {width < 1600 && (
          <div>
            <RadioListNav
              radioListName={'mobile-demo'}
              images={images}
              currentIndex={activeImage}
              onChangeFunc={onSetActiveImage}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Mobile;

import { useRef, useEffect, useLayoutEffect, useState, createRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useWindowDimensions from '../../../hooks/UseWindowDimensions';
import useImagesPreloader from '../../../hooks/UseImagesPreloader';
import RadioListNav from '../../layout/RadioListNav/RadioListNav';
import styles from './Mobile.module.scss';
import { RESOLUTIONS } from './../../../constants/constants';
gsap.registerPlugin(ScrollTrigger);

interface Iprops {
  images: string[];
  backgroundColor?: string;
}

const Mobile = ({ images, backgroundColor }: Iprops) => {
  const onSetActiveImage = (index: number) => {
    setActiveImage(index);
  };

  const { width } = useWindowDimensions();
  const mobilePhoneWrapper = useRef(null);
  const imgsLoaded = useImagesPreloader(images);

  useLayoutEffect(() => {
    if (width > 1600) {
      let ctx = gsap.context(() => {

        gsap.set('.mobile-phone-00', {
          x: 460,
        });
        gsap.set('.mobile-phone-02', {
          x: -460,
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
  }, [imgsLoaded, width]);

  const [activeImage, setActiveImage] = useState(0);

  return (
    <section
      ref={mobilePhoneWrapper}
      className={styles.mobile}
      style={{ backgroundColor: backgroundColor ? backgroundColor : '#ffffff' }}
    >
      <div className={styles.mobile__wrapper}>
        <h1 className={styles.mobile__header}>mobile</h1>
        <div>
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={`mobile-phone-0${index} ${styles.mobile__phone_vector} ${
                  activeImage === index
                    ? styles['mobile__phone_vector--active']
                    : ''
                }`}
              >
                <img className={styles.mobile__img} src={image} />
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
            {/* <nav className={styles.sliderNav}>
              <div className={styles.sliderNav__wrapper}>
                {images.map((image, index) => {
                  return (
                    <div key={index} className={styles.sliderNav__item}>
                      <input
                        className={styles.sliderNav__item_radio}
                        type="radio"
                        id={index.toString()}
                        name="drone"
                        value={image}
                        onChange={() => onSetActiveImage(index)}
                      />
                      <label
                        className={styles.sliderNav__item_label}
                        htmlFor={index.toString()}
                      >
                        {index + 1}
                      </label>
                    </div>
                  );
                })}
              </div>
            </nav> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Mobile;

import { useState, useLayoutEffect, useRef } from 'react';
import RadioListNav from '../../layout/RadioListNav/RadioListNav';
import useImagesPreloader from '../../../hooks/UseImagesPreloader';
import useWindowDimensions from '../../../hooks/UseWindowDimensions';
import { is_touch_device } from '../../../utils/utils';

import styles from './ResponsiveSlider.module.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Iprops {
  images: string[];
  refreshPriority?: number;
}

const ResponsiveSlider = ({ images, refreshPriority }: Iprops) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideResolution, setSlideResolution] = useState('mobile');
  const heroBackgroundLayer = useRef(null);
  const screenSizeLabels = ['mobile', 'tablet', 'desktop']
  const { width } = useWindowDimensions();
  const toggleResponsive = (width > 1599 && !is_touch_device())

  // const imgsLoaded = useImagesPreloader(images);

  const onScrollChange = (percentage:number) => {

    if (percentage >= 0 && percentage <= .33  ) {
      onNavClick(0)
    }
    if(percentage >= 0.34 && percentage <= .66 ) {
      onNavClick(1)
    }
    if(percentage >= 0.67 && percentage <= 1 ) {
      onNavClick(2)
    }
  }

  useLayoutEffect(() => {
  if (toggleResponsive) {
    let ctx = gsap.context(() => {
      gsap.to(heroBackgroundLayer.current, {
        ease: 'none',
        scrollTrigger: {
          pin: true,
          trigger: heroBackgroundLayer.current,
          start: 'top 0', // the default values
          end: '+=3000',
          onUpdate: self => onScrollChange(self.progress),
          refreshPriority: refreshPriority
        },
      });
      console.log('responsiveSlider')
    }); 
    return () => ctx.revert();
  }
  }, [width])

  const onNavClick = (index: number) => {
    setCurrentSlide(index);
    setSlideResolution(screenSizeLabels[index]);
  };

  return (
    <section ref={heroBackgroundLayer}  className={styles.slider}>
      <div className={styles.slider__wrapper}>
        { toggleResponsive &&
        <>
          <div
            className={`${styles.bitmap} ${styles[`bitmap--${slideResolution}`]}`}
          >
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.bitmap__img_container} ${
                    index === currentSlide
                      ? styles['bitmap__img_container--active']
                      : ''
                  }`}
                >
                  <img className={styles.bitmap__img} src={images[index]} />
                </div>
              );
            })}
          </div>
          <RadioListNav
            radioListName={'responsive-demo'}
            images={['', '', '']}
            currentIndex={currentSlide}
            onChangeFunc={onNavClick}
          />
        </>
        }
        {
          !toggleResponsive &&
          <div  className={styles.slider__picture_wrapper}>
                <picture>
                <source media="(max-width: 767px)" srcSet={images[0]} />
                <source
                  media="(min-width: 768px) and (max-width: 1023px)"
                  srcSet={images[1]}
                />
                <img className={styles.slider__picture} src={images[2]} />
              </picture>
          </div>
        }

      </div>
    </section>
  );
};

export default ResponsiveSlider;

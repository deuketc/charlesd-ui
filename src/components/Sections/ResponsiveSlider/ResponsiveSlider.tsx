import { useState, useLayoutEffect, useRef } from 'react';
import RadioListNav from '../../layout/RadioListNav/RadioListNav';

import styles from './ResponsiveSlider.module.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Iprops {
  images: {
    src: string;
    screenSize: string;
  }[];
}

const ResponsiveSlider = ({ images }: Iprops) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideResolution, setSlideResolution] = useState('mobile');
  const heroBackgroundLayer = useRef(null);

  const onScrollChange = (percentage:number) => {
    console.log(percentage)
    if(percentage>.3) {
      onNavClick(1)
    }
    if(percentage>.6) {
      onNavClick(2)
    }
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(heroBackgroundLayer.current, {
        ease: 'none',
        scrollTrigger: {
          pin: true,
          trigger: heroBackgroundLayer.current,
          start: '0px top', // the default values
          end: 'bottom top',
          onUpdate: self => onScrollChange(self.progress)
        },
      });
    }); 
    return () => ctx.revert();
  }, [])

  const onNavClick = (index: number) => {
    setCurrentSlide(index);
    setSlideResolution(images[index].screenSize);
  };

  return (
    <section ref={heroBackgroundLayer}  className={styles.slider}>
      <div className={styles.slider__wrapper}>
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
                <img className={styles.bitmap__img} src={image.src} />
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
      </div>
    </section>
  );
};

export default ResponsiveSlider;

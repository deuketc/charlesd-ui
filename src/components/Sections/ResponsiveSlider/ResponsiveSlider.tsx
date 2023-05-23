import { useState } from 'react';
import RadioListNav from '../../layout/RadioListNav/RadioListNav';

import styles from './ResponsiveSlider.module.scss';

interface Iprops {
  images: {
    src: string;
    screenSize: string;
  }[];
}

const ResponsiveSlider = ({ images }: Iprops) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideResolution, setSlideResolution] = useState('mobile');

  const onNavClick = (index: number) => {
    setCurrentSlide(index);
    setSlideResolution(images[index].screenSize);
  };

  return (
    <section className={styles.slider}>
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

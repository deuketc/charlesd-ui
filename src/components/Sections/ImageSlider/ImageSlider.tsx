import { useState } from 'react';
import RadioListNav from '../../layout/RadioListNav/RadioListNav';
import styles from './ImageSlider.module.scss';
import { makeid } from '../../../utils/utils';

interface Iprops {
  images: string[];
  backgroundColor: string;
}

const ImageSlider = ({ images, backgroundColor }: Iprops) => {
  const [currentImage, setCurrentImage] = useState(0);

  const onNavClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <section
      className={styles.slider}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={styles.slider__wrapper}>
        <div>
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={`${styles.slider__img_container} ${
                  index !== currentImage ? 'hidden' : ''
                }`}
              >
                <img className={styles.slider__img} src={image} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <RadioListNav
          currentIndex={currentImage}
          onChangeFunc={onNavClick}
          images={images}
          radioListName={makeid(5)}
        />
      </div>
    </section>
  );
};

export default ImageSlider;

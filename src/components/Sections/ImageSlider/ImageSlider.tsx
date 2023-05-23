import { useState } from 'react';
import RadioListNav from '../../layout/RadioListNav/RadioListNav';
import styles from './ImageSlider.module.scss';

interface Iprops {
  images: string[];
  backgroundColor: string;
}

const ImageSlider = ({ images, backgroundColor }: Iprops) => {
  const [currentImage, setCurrentImage] = useState(0);

  const onNavClick = (index: number) => {
    console.log('index', index);
    setCurrentImage(index);
  };

  const makeid = (length: number) => {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
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

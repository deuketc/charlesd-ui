import { useRef,useState, useLayoutEffect, useEffect } from 'react';
import RadioListNav from '../../layout/RadioListNav/RadioListNav';
import styles from './DarkMode.module.scss';
import { makeid } from '../../../utils/utils';
import { is_touch_device } from '../../../utils/utils';
import useImagesPreloader from '../../../hooks/UseImagesPreloader';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Iprops {
  images: string[];
  backgroundColor: string;
  isLoaded: boolean;
}



const DarkMode = ({ images, backgroundColor, isLoaded }: Iprops) => {
  const [imageMaskWidth, setImageMaskWidth] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const tooltip = useRef(null);
  const sliderWrapper2 = useRef(null);
  const imgsLoaded = useImagesPreloader(images);

  const onNavClick = (index: number) => {
    setCurrentImage(index);
  };

  const onMouseMouseFunc = (e:MouseEvent) => {
    setImageMaskWidth(e.pageX - e.currentTarget.offsetLeft);
  };

  useLayoutEffect(() => {
    let ctx2 = gsap.context(() => {
      gsap.set(tooltip.current, {
        opacity: 0,
        x: 110,
      });

      gsap.to(tooltip.current, {
        scrollTrigger:{
          trigger:sliderWrapper2.current, 
          markers:true,
          start:"top center"
        },
        opacity: 1,
        x: 0,
        duration: 1,
      })
      
    });
    console.log('darkmode component');
    console.log('isLoaded', isLoaded);
    return () => ctx2.revert();
   
  }, [isLoaded, imgsLoaded]);

  const isTouchDevice = is_touch_device();

  return (
    <section 
      ref={sliderWrapper2}
      className={styles.slider}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={styles.slider__wrapper}>
        <div
          onMouseMove={e => {
            onMouseMouseFunc(e);
          }}
          className={styles.slider__inner_wrapper}
        >
          <div className={`${styles.slider__img_container}`}>
            <img className={styles.slider__img} src={images[0]} />
          </div>
          <div className={`${styles.slider__img_container}`} style={{width: imageMaskWidth}}>
            <img className={styles.slider__img} src={images[1]} />
          </div>
          
        </div>
        <span ref={tooltip} className={styles.slider__tooltip}>Hover for Light/Dark mode</span>
      </div>
      {isTouchDevice && (
        <div>
          <RadioListNav
            currentIndex={currentImage}
            onChangeFunc={onNavClick}
            images={images}
            radioListName={makeid(5)}
          />
        </div>
      )}
    </section>
  );
};

export default DarkMode;

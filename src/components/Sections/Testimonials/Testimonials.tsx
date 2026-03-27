import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import useWindowDimensions from '../../../hooks/UseWindowDimensions';

import styles from './Testimonials.module.scss';

interface TestimonialsProps {
  children: React.ReactNode;
}

const Testimonials: React.FC<TestimonialsProps> = ({ children }) => {
  const { width } = useWindowDimensions();
  const childWidth = width > 2560 ? 30 : width < 768 ? 90 : 45;
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const totalItems = React.Children.count(children);
  // console.log('total', totalItems);
  const containerWidth = totalItems * childWidth;
  const increment = 100 / totalItems;
  // const increment = containerWidth / totalItems;
  console.log('increment', increment);
  const itemWidth = Math.floor((childWidth / 100) * 10);
  // console.log('itemWidth', itemWidth);
  const itemsOutView = totalItems - itemWidth;
  // console.log('itemsOutView', itemsOutView);
  const maxIndex = totalItems - itemsOutView + 1;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        xPercent: -currentIndex * increment,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [currentIndex, increment]);

  return (
    <>
      <div className={styles.slider_wrapper}>
        <div
          className={styles.slider_content}
          ref={contentRef}
          style={{ width: `${containerWidth}%` }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              className={styles.slider_itemWrapper}
              key={index}
              style={{ width: `${childWidth}%` }}
            >
              <div className={styles.slider_item}>{child}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.slider_controls}>
        <button
          className={`${styles.slider_button} ${
            currentIndex === 0 ? styles.slider_buttonInactive : ''
          }`}
          onClick={handlePrevious}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          className={`${styles.slider_button} ${
            currentIndex === maxIndex ? styles.slider_buttonInactive : ''
          }`}
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </>
  );
};
export default Testimonials;

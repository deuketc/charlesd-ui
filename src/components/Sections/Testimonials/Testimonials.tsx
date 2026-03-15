import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Testimonials.module.scss';

interface TestimonialsProps {
  children: React.ReactNode;
  childWidth: number;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  children,
  childWidth,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const totalItems = React.Children.count(children);
  const containerWidth = totalItems * childWidth;
  const increment = 100 / totalItems;
  const itemWidth = Math.floor((childWidth / 100) * 10);
  const itemsOutView = totalItems - itemWidth;
  const maxIndex = totalItems - itemsOutView;

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
      <div className={styles.accordion_wrapper}>
        <div
          className={styles.accordion_content}
          ref={contentRef}
          style={{ width: `${containerWidth}%` }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              className={styles.accordion_itemWrapper}
              key={index}
              style={{ width: `${childWidth}%` }}
            >
              <div className={styles.accordion_item}>{child}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.accordion_controls}>
        <button
          className={`${styles.accordion_button} ${
            currentIndex === 0 ? styles.accordion_buttonInactive : ''
          }`}
          onClick={handlePrevious}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          className={`${styles.accordion_button} ${
            currentIndex === maxIndex ? styles.accordion_buttonInactive : ''
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

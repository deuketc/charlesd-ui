import styles from './LogosHorizontalScroll.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import useWindowDimensions from '../../../hooks/UseWindowDimensions';

gsap.registerPlugin(ScrollTrigger);

const LogosHorizontalScroll = ({
  images,
  direction = 'left',
}: {
  images: JSX.Element[];
  direction?: 'left' | 'right';
}) => {
  const { width } = useWindowDimensions();
  const flexWrapperRef = useRef<HTMLDivElement>(null);
  const cellWidth = width > 768 ? 25 : 50; // Adjust this value based on your design (e.g., 25% for 4 logos per view)
  const cellEndWidth = direction === 'right' ? 30 : 10; // Width of the end cell
  const cellStartWidth = direction === 'right' ? 10 : 30; // Width of the start cell

  useEffect(() => {
    const flexWrapper = flexWrapperRef.current;
    if (!flexWrapper) return;

    const distance =
      images.length * cellWidth + cellEndWidth + cellStartWidth - 100;

    if (direction === 'right') {
      gsap.set(flexWrapper, { left: `-${distance}%` });
    }

    const animation = gsap.to(flexWrapper, {
      left: direction === 'right' ? '0%' : `-${distance}%`,
      scrollTrigger: {
        trigger: flexWrapper.closest(`.${styles.container}`),
        start: '200px bottom',
        end: 'bottom top',
        scrub: true,
        markers: false,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
    };
  }, [cellWidth, cellEndWidth, cellStartWidth, direction, images.length, styles.container]);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Logo Carousel</h2>
        <div
          className={styles.flexWrapper}
          ref={flexWrapperRef}
          style={{
            width: `${
              images.length * cellWidth + cellEndWidth + cellStartWidth
            }%`,
          }}
        >
          <div
            className={styles.cellStart}
            style={{ width: `${cellStartWidth}%` }}
          ></div>
          {images.map((Image, index) => (
            <div className={styles.cell} key={index}>
              {Image}
            </div>
          ))}
          <div
            className={styles.cellEnd}
            style={{ width: `${cellEndWidth}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default LogosHorizontalScroll;

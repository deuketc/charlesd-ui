import React from 'react';
import styles from './DualImage.module.scss';

interface DualImageProps {
  images: {
    image1: {
      description: string;
      location: string;
    };
    image2: {
      description: string;
      location: string;
    };
  };
}

const DualImage = ({ images }: DualImageProps) => {
  return (
    <div className={styles.dualImage}>
      <h2 className={styles.dualImageHeader}>Image Section</h2>
      <div className={styles.col1}>
        <img
          className={styles.image}
          src={images.image1.location}
          alt={images.image1.description}
        />
      </div>
      <div className={styles.col2}>
        <img
          className={styles.image}
          src={images.image2.location}
          alt={images.image2.description}
        />
      </div>
    </div>
  );
};

export default DualImage;

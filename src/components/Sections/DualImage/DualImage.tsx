import { useRef, useEffect } from 'react';
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
  onImageLoad?: () => void;
}

const DualImage = ({ images, onImageLoad }: DualImageProps) => {
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const loadedCount = useRef(0);

  const handleLoad = () => {
    if (!onImageLoad) return;
    loadedCount.current += 1;
    if (loadedCount.current >= 2) requestAnimationFrame(onImageLoad);
  };

  useEffect(() => {
    if (!onImageLoad) return;
    const imgs = [img1Ref.current, img2Ref.current];
    let cachedCount = 0;
    imgs.forEach(img => {
      if (img?.complete && img.naturalHeight > 0) cachedCount += 1;
    });
    if (cachedCount >= 2) requestAnimationFrame(onImageLoad);
  }, [onImageLoad]);

  return (
    <div className={styles.dualImage}>
      <h2 className={styles.dualImageHeader}>Image Section</h2>
      <div className={styles.col1}>
        <img
          ref={img1Ref}
          className={styles.image}
          src={images.image1.location}
          alt={images.image1.description}
          onLoad={handleLoad}
        />
      </div>
      <div className={styles.col2}>
        <img
          ref={img2Ref}
          className={styles.image}
          src={images.image2.location}
          alt={images.image2.description}
          onLoad={handleLoad}
        />
      </div>
    </div>
  );
};

export default DualImage;

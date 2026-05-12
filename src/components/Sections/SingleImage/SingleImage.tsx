import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './SingleImage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  image: imageObj;
  backgroundColor: string;
  deviceWidth?: number;
  alignment?: 'left' | 'center' | 'right';
  alt?: string;
  onImageLoad?: () => void;
}

interface imageObj {
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
}

const SingleImage = ({
  image,
  backgroundColor,
  deviceWidth,
  alignment = 'center',
  alt = '',
  onImageLoad,
}: IProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!onImageLoad) return;
    const img = imgRef.current;
    if (img?.complete && img.naturalHeight > 0) {
      requestAnimationFrame(onImageLoad);
    }
  }, [onImageLoad]);

  return (
    <>
      <section
        style={{ backgroundColor: backgroundColor }}
        className={styles.singleImage}
        onClick={() => setIsExpanded(true)}
      >
        <div className={deviceWidth ? '' : styles.singleImage__wrapper}>
          <h2 className={styles.title}>{alt}</h2>
          <picture>
            <source media="(max-width: 767px)" srcSet={image.mobileSrc} />
            <source
              media="(min-width: 768px) and (max-width: 1023px)"
              srcSet={image.tabletSrc}
            />
            <img
              ref={imgRef}
              className={styles.singleImage__picture}
              src={image.desktopSrc}
              alt={alt}
              onLoad={onImageLoad}
              style={{
                margin:
                  alignment === 'left'
                    ? '0 auto 0 0'
                    : alignment === 'right'
                    ? '0 0 0 auto'
                    : '0 auto',
              }}
            />
          </picture>
          <button className={styles.singleImage__expand_button}>
            <FontAwesomeIcon icon={faExpand} />
            {/* &nbsp;&nbsp;
            <span>Expand</span> */}
          </button>
        </div>
      </section>

      {isExpanded &&
        createPortal(
          <div className={styles.overlay} onClick={() => setIsExpanded(false)}>
            <img
              src={image.mobileSrc}
              alt={alt}
              className={styles.overlay__image}
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default SingleImage;

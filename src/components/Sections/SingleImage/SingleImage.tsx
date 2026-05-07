import styles from './SingleImage.module.scss';

interface IProps {
  image: imageObj;
  backgroundColor: string;
  deviceWidth?: number;
  alignment?: 'left' | 'center' | 'right';
  alt?: string;
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
}: IProps) => {
  return (
    <section
      style={{ backgroundColor: backgroundColor }}
      className={styles.singleImage}
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
            className={styles.singleImage__picture}
            src={image.desktopSrc}
            alt={alt}
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
      </div>
    </section>
  );
};

export default SingleImage;

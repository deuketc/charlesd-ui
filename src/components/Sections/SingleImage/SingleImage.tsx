import styles from './SingleImage.module.scss';

interface IProps {
  image: imageObj;
  backgroundColor: string;
  deviceWidth?: number;
}

interface imageObj {
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
}

const SingleImage = ({ image, backgroundColor, deviceWidth }: IProps) => {
  return (
    <section
      style={{ backgroundColor: backgroundColor }}
      className={styles.singleImage}
    >
      <div className={deviceWidth ? '' : styles.singleImage__wrapper}>
        <picture>
          <source media="(max-width: 767px)" srcSet={image.mobileSrc} />
          <source
            media="(min-width: 768px) and (max-width: 1023px)"
            srcSet={image.tabletSrc}
          />
          <img className={styles.singleImage__picture} src={image.desktopSrc} />
        </picture>
      </div>
    </section>
  );
};

export default SingleImage;

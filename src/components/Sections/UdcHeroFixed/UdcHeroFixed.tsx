import HeroImage from '../../../assets/projects/udc/udc-row01-banner-desktop-mobile-02.png';
import styles from './UdcHeroFixed.module.scss';

const UdcHeroFixed = () => {
  return (
    <>
      <div className={styles.heroSpacer} />
      <div className={styles.hero}>
        <div className={styles.background}></div>
        <div className={styles.container}>
          <img className={styles.heroImage} src={HeroImage} alt="UDC Hero" />
        </div>
      </div>
    </>
  );
};

export default UdcHeroFixed;

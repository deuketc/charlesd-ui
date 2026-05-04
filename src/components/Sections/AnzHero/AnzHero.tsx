import HeroImage from '../../../assets/projects/touchpoint/anz-landing-01.png';
import styles from './AnzHero.module.scss';

const AnzHero = () => {
  return (
    <>
      <div className={styles.heroSpacer} />
      <div className={styles.hero}>
        <div className={styles.background}></div>
        <div className={styles.container}>
          <img className={styles.heroImage} src={HeroImage} alt="ANZ Hero" />
        </div>
      </div>
    </>
  );
};

export default AnzHero;

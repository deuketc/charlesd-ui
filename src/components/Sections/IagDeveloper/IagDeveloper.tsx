import styles from './IagDeveloper.module.scss';
import CopySection from '../CopySection/CopySection';

const IagDeveloper = () => {
  return (
    <section className={styles.developer}>
      <CopySection
        title="Developer Progression"
        body="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pretium hendrerit elementum. Duis eget arcu augue. Morbi facilisis lorem ac justo aliquet euismod."
      />
      <div className={styles.developer__wrapper}>
        <article className={styles.developer__article}>
          <h2 className={styles.developer__copy_title}>developer</h2>
          <p className={styles.developer__copy_level}>1</p>
          <p className={styles.developer__copy_description}>
            Nullam eros velit, iaculis in venenatis sit amet, finibus non velit.
            Aliquam porttitor finibus lectus et congue.
          </p>
        </article>
        <article className={styles.developer__article}>
          <h2 className={styles.developer__copy_title}>developer</h2>
          <p className={styles.developer__copy_level}>2</p>
          <p className={styles.developer__copy_description}>
            Vestibulum id urna quis ex iaculis consequat et eu turpis. Cras in
            est a lorem varius egestas vitae sed sem.
          </p>
        </article>
        <article className={styles.developer__article}>
          <h2 className={styles.developer__copy_title}>developer</h2>
          <p className={styles.developer__copy_level}>3</p>
          <p className={styles.developer__copy_description}>
            Integer ullamcorper quis justo ut mollis. Nunc rutrum dictum nibh ac
            aliquet.
          </p>
        </article>
      </div>
    </section>
  );
};

export default IagDeveloper;

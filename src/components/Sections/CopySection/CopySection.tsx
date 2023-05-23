import styles from './CopySection.module.scss';
import parse from 'html-react-parser';

interface Iprops {
  title: string;
  body: string;
  backgroundColor?: string;
  color?: string;
}

const CopySection = (props: Iprops) => {
  const { title, body, backgroundColor, color } = props;
  return (
    <section
      className={styles.copy_section}
      style={{ backgroundColor: backgroundColor ? backgroundColor : '#ffffff' }}
    >
      <div className={styles.copy_section__wrapper}>
        <div className={styles.copy_section__details}>
          <h2
            className={styles.copy_section__header}
            style={{
              color: color ? color : '#000',
            }}
          >
            {title}
          </h2>
          <p
            className={styles.copy_section__copy}
            style={{
              color: color ? color : '#000',
            }}
          >
            {parse(body)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CopySection;

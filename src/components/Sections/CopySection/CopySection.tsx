import styles from './CopySection.module.scss';
import parse from 'html-react-parser';

interface Iprops {
  align?: string;
  title?: string;
  body: string;
  backgroundColor?: string;
  color?: string;
  paddingTop?: boolean;
  paddingBottom?: boolean;
}

const CopySection = (props: Iprops) => {
  const { align, title, body, backgroundColor, color, paddingTop, paddingBottom } =
    props;
  return (
    <section
      className={`${styles.copy_section} ${
        paddingTop ? styles.copy_section__padding_top : ''
      } ${paddingBottom ? styles.copy_section__padding_bottom : ''} ${
        paddingBottom && paddingTop
          ? styles.copy_section__padding_top_bottom
          : ''
      }`}
      style={{ backgroundColor: backgroundColor ? backgroundColor : '#ffffff' }}
    >
      <div className={styles.copy_section__wrapper}>
        <div className={`${styles.copy_section__details} ${(align === 'center' ? 'center' : '' ) } `}>
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

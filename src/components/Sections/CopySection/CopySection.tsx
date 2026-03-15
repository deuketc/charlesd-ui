import styles from './CopySection.module.scss';
import parse from 'html-react-parser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Iprops {
  margin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  bulletlist?: { icon: any; text: string }[];
  superTitle?: string;
  title?: string;
  titleStyle?: string;
  body?: string;
  backgroundColor?: string;
  color?: string;
  paddingTop?: boolean;
  paddingBottom?: boolean;
  width?: boolean;
}

const CopySection = (props: Iprops) => {
  const {
    margin,
    textAlign,
    title,
    body,
    backgroundColor,
    color,
    paddingTop,
    paddingBottom,
    superTitle,
    width,
  } = props;

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
        <div
          className={`${styles.copy_section__details}`}
          style={{ margin: margin, width: width ? `${width}%` : 'auto' }}
        >
          {superTitle && (
            <h1
              className={styles.copy_section__header_super}
              style={{
                color: color ? color : '#000',
                textAlign: textAlign ? textAlign : 'left',
              }}
            >
              {superTitle}
            </h1>
          )}
          {title && (
            <h2
              className={styles.copy_section__header}
              style={{
                color: color ? color : '#000',
                textAlign: textAlign ? textAlign : 'left',
              }}
            >
              {title}
            </h2>
          )}
          {body && (
            <p
              className={styles.copy_section__copy}
              style={{
                color: color ? color : '#000',
                textAlign: textAlign ? textAlign : 'left',
              }}
            >
              {parse(body)}
            </p>
          )}
          {props.bulletlist && (
            <div>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {props.bulletlist.map((bullet, i) => (
                  <li
                    key={i}
                    className={styles.copy_section__copy}
                    style={{
                      color: color ? color : '#000',
                      marginBottom: '1rem',
                    }}
                  >
                    <span
                      style={{
                        minWidth: '6rem',
                        display: 'inline-block',
                        textAlign: 'center',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={bullet.icon}
                        className={styles.copy_section__icon}
                      />
                    </span>
                    <span>{parse(bullet.text)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CopySection;

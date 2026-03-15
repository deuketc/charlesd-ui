import React from 'react';
import styles from './SectionCopy.module.scss';
import parse from 'html-react-parser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SectionCopyProps {
  children?: React.ReactNode;
  bulletlist?: { icon: any; text: string }[];
  textColor?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}

const SectionCopy: React.FC<SectionCopyProps> = ({
  children,
  textColor,
  textAlign,
  bulletlist,
}) => {
  return (
    <>
      {children && (
        <div
          className={styles.section_copy}
          style={{
            ...(textColor && { color: textColor }),
            ...(textAlign && { textAlign }),
          }}
        >
          {typeof children === 'string' ? parse(children) : children}
        </div>
      )}

      {bulletlist && (
        <div>
          <ul
            className={styles.section_bulletlist}
            style={{ listStyleType: 'none', padding: 0, margin: 0 }}
          >
            {bulletlist.map((bullet, i) => (
              <li
                key={i}
                className={styles.copy_section__copy}
                style={{
                  color: textColor ? textColor : '#000',
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
    </>
  );
};

export default SectionCopy;

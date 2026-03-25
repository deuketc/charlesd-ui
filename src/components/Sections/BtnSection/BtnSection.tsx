import React from 'react';
import styles from './BtnSection.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Button {
  icon?: any;
  label: string;
  url: string;
}

interface IProps {
  backgroundColor?: string;
  buttons: Button[];
}

const BtnSection = ({ buttons }: IProps) => {
  return (
    <section className={styles.btn_section__wrapper}>
      <div className={styles.btn_section__container}>
        {buttons.map((btn, i) => (
          <Link
            key={btn.url}
            to={btn.url}
            className={i === 0 ? styles.btn__primary : styles.btn__secondary}
          >
            {btn.icon && (
              <FontAwesomeIcon
                icon={btn.icon}
                className={styles.btn_section__icon}
              />
            )}

            {btn.label}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BtnSection;

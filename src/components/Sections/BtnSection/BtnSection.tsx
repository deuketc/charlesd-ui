import React from 'react'
import styles from './BtnSection.module.scss'
import { Link } from 'react-router-dom';

interface IProps {
    backgroundColor?: string;
    btn01Label: string;
    btn02Label: string;
  }

const BtnSection = ({backgroundColor, btn01Label, btn02Label}: IProps) => {
    return (
        <section
          className={styles.btn_section__wrapper}
          style={{ backgroundColor: backgroundColor }}
        >

            <div className={styles.btn_section__container}>
                <Link to="#" className={styles.btn__primary}>
                  {btn01Label}
                </Link>
                <Link to="#" className={styles.btn__secondary}>
                  {btn02Label}
                </Link>
              </div>
        </section>
      );
}

export default BtnSection
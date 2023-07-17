import React from 'react'
import styles from './BtnSection.module.scss'
import { Link } from 'react-router-dom';

interface IProps {
    backgroundColor?: string;
    btn01Label: string;
    btn02Label: string;
    btn01Url: string;
    btn02Url: string;
  }

const BtnSection = ({backgroundColor, btn01Label, btn02Label, btn01Url, btn02Url}: IProps) => {
    return (
        <section
          className={styles.btn_section__wrapper}
          style={{ backgroundColor: backgroundColor }}
        >

            <div className={styles.btn_section__container}>
                <Link target='_blank' to={btn01Url} className={styles.btn__primary}>
                  {btn01Label}
                </Link>
                <Link to={btn02Url} className={styles.btn__secondary}>
                  {btn02Label}
                </Link>
              </div>
        </section>
      );
}

export default BtnSection
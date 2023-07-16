import styles from './NextProject.module.scss';
import { Link } from 'react-router-dom';

interface IProps {
  copy: string;
  header: string;
  btnUrl: string;
  btnLabel: string;
  backgroundColor?: string;
}

const NextProject = ({ copy, header, btnUrl, btnLabel, backgroundColor }: IProps) => {
  return (
    <section
      className={styles.nextProject}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={styles.nextProject__wrapper}>
        <h2 className={styles.nextProject__header}>{header}</h2>
        <p className={styles.nextProject__copy}>{copy}</p>
        <div className={styles.btn__wrapper}>
            <Link to={btnUrl} className={styles.btn__primary}>
              {btnLabel}
            </Link>
            <Link to="/projects" className={styles.btn__secondary}>
              All Projects
            </Link>
          </div>
        {/* <a className={styles.nextProject__btn} href={url}>
          UDC casestudy
        </a> */}
      </div>
    </section>
  );
};

export default NextProject;

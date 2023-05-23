import styles from './NextProject.module.scss';

interface IProps {
  copy: string;
  header: string;
  url: string;
  backgroundColor?: string;
}

const NextProject = ({ copy, header, url, backgroundColor }: IProps) => {
  return (
    <section
      className={styles.nextProject}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={styles.nextProject__wrapper}>
        <h2 className={styles.nextProject__header}>{header}</h2>
        <p className={styles.nextProject__copy}>{copy}</p>
        <a className={styles.nextProject__btn} href={url}>
          UDC casestudy
        </a>
      </div>
    </section>
  );
};

export default NextProject;

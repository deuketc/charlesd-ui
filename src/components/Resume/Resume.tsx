import Accomplishments from '../Sections/Accomplishments/Accomplishments';
import Employment from '../Sections/Employment/Employment';
import Skills from '../Sections/Skills/Skills';
import Education from '../Sections/Education/Education';
import styles from './Resume.module.scss';

const Resume = () => {
  return (
    <div className={styles.resume}>
      <div className={styles.resume__wrapper}>
        <h1 className={styles.resume__header}>Resume</h1>
      </div>
      <Accomplishments />
      <Employment />
      <Skills />
      <Education />
    </div>
  );
};

export default Resume;

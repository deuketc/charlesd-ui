import LogoReact from '../../../assets/svg/LogoReact';
import LogoHtml5 from '../../../assets/svg/LogoHtml5';
import LogoCss3 from '../../../assets/svg/LogoCss3';
import LogoJavascript from '../../../assets/svg/LogoJavascript';
import LogoScss from '../../../assets/svg/LogoScss';
import LogoGit from '../../../assets/svg/LogoGit';
import LogoRedux from '../../../assets/svg/LogoRedux';
import LogoTailwind from '../../../assets/svg/LogoTailwind';
import styles from './Skills.module.scss';
import LogoNext from '../../../assets/svg/LogoNext';
import LogoTypescript from '../../../assets/svg/LogoTypescript';

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Technical Skills</h2>
      </div>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p>
              <LogoHtml5 />
            </p>
            <p className={styles.label}>HTML5</p>
          </li>
          <li className={styles.listItem}>
            <p>
              <LogoCss3 />
            </p>
            <p className={styles.label}>CSS3</p>
          </li>
          <li className={styles.listItem}>
            <p>
              <LogoJavascript />
            </p>
            <p className={styles.label}>Javascript</p>
          </li>
          <li className={styles.listItem}>
            <p>
              <LogoTypescript />
            </p>
            <p className={styles.label}>Typescript</p>
          </li>
          <li className={styles.listItem}>
            <p>
              <LogoScss />
            </p>
            <p className={styles.label}>SCSS</p>
          </li>
          <li className={styles.listItem}>
            <p>
              <LogoTailwind />
            </p>
            <p className={styles.label}>Tailwind</p>
          </li>
          <li className={styles.listItem}>
            <p>
              <LogoReact />
            </p>
            <p className={styles.label}>React / Next.js</p>
          </li>
          {/* <li className={styles.listItem}>
            <p>
              <LogoNext />
            </p>
            <p className={styles.label}>Next.js</p>
          </li> */}
          <li className={styles.listItem}>
            <p>
              <LogoRedux />
            </p>
            <p className={styles.label}>Redux</p>
          </li>
          <li className={styles.listItem}>
            <p>
              <LogoGit />
            </p>
            <p className={styles.label}>Source Control</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;

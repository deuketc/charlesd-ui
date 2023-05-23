import styles from './Employment.module.scss';

const Employment = () => {
  return (
    <section className={styles.employment}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Employment History</h2>
      </div>
      <div className={styles.listWrapper}>
        <div className={styles.list}>
          <article className={styles.listItemCurrent}>
            <div className={styles.listItemCurrentWrapper}>
              <h3 className={styles.headerSub}>IAG</h3>
              <p className={styles.copy}>Front-End Engineer</p>
              <p className={styles.copy}>November 2017 - Present</p>
              <p className={styles.copy}>
                Build and deploy digital products in an agile development
                environment.
              </p>
              <ul className={styles.copy}>
                <li>Front-end web development with HTML, CSS and Javascript</li>
                <li>Optimization and maintenance</li>
                <li>Agile development</li>
                <li>Testing</li>
                <li>Mentoring</li>
              </ul>
            </div>
          </article>

          <div className={styles.listPreviousWrapper}>
            <article className={styles.listItem}>
              <div className={styles.listItemWrapper}>
                <h3 className={styles.headerSub}>Touchpoint Group</h3>
                <p className={styles.copy}>Front-End Web Developer</p>
                <p className={styles.copy}>May 2014 - November 2017</p>
                <p className={styles.copy}>
                  Build and maintain responsive websites and email campaigns.
                </p>
                <ul className={styles.copy}>
                  <li className="resume-employment-history__list-item">
                    Front-end web development with HTML, CSS and Javascript
                  </li>
                  <li className="resume-employment-history__list-item">
                    Responsive website design and development
                  </li>
                  <li className="resume-employment-history__list-item">
                    Responsive email campaign development
                  </li>
                  <li className="resume-employment-history__list-item">
                    CMS Integration
                  </li>
                  <li className="resume-employment-history__list-item">
                    Browser and device testing
                  </li>
                  <li className="resume-employment-history__list-item">
                    Project estimates
                  </li>
                </ul>
              </div>
            </article>

            <article className={styles.listItem}>
              <div className={styles.listItemWrapper}>
                <h3 className={styles.headerSub}>Solutionists</h3>
                <p className={styles.copy}>Front-End Web Developer</p>
                <p className={styles.copy}>December 2011 - May 2014</p>
                <p className={styles.copy}>
                  Produce, modify and maintain website and web application user
                  interfaces.
                </p>
                <ul className={styles.copy}>
                  <li className="resume-employment-history__list-item">
                    Front-end web development with HTML, CSS and jQuery
                  </li>
                  <li className="resume-employment-history__list-item">
                    Responsive design and development
                  </li>
                  <li className="resume-employment-history__list-item">
                    Email campaigns
                  </li>
                  <li className="resume-employment-history__list-item">
                    Browser testing
                  </li>
                </ul>
              </div>
            </article>

            <article className={styles.listItem}>
              <div className={styles.listItemWrapper}>
                <h3 className={styles.headerSub}>
                  Ministry of Justice (Department of Courts)
                </h3>
                <p className={styles.copy}>Systems Support Analyst</p>
                <p className={styles.copy}>July 2004 - February 2011</p>
                <p className={styles.copy}>
                  Provide technical support for all I.T systems at the Ministry
                  of Justice's Auckland Collections Contact Centre and District
                  Courts.
                </p>
                <ul className={styles.copy}>
                  <li className="resume-employment-history__list-item">
                    Desktop/network support
                  </li>
                  <li className="resume-employment-history__list-item">
                    Application configuration and maintenance
                  </li>
                  <li className="resume-employment-history__list-item">
                    Remote administration
                  </li>
                  <li className="resume-employment-history__list-item">
                    After hours support
                  </li>
                  <li className="resume-employment-history__list-item">
                    Multimedia development
                  </li>
                  <li className="resume-employment-history__list-item">
                    Technical document writing.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employment;

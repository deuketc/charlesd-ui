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
              <h3 className={styles.headerSub}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  width="120px"
                  height="94.5px"
                  viewBox="0 0 600 498"
                >
                  <title>IAG</title>
                  <path
                    //class="st0"
                    fill="#ffffff"
                    d="M4.61,89.38h60.94v232.28H4.61V89.38z M88.08,205.28c0-66.3,53.75-120.05,120.05-120.05  c24.32,0,46.95,7.26,65.87,19.7V89.38h60.94v232.28H274v-16.03c-18.92,12.44-41.54,19.7-65.87,19.7  C141.82,325.34,88.08,271.58,88.08,205.28z M143.14,205.28c0,35.84,29.15,64.99,64.99,64.99c35.84,0,64.99-29.16,64.99-64.99  c0-35.84-29.15-64.99-64.99-64.99C172.29,140.29,143.14,169.45,143.14,205.28z M358.73,205.27c0-66.25,53.89-120.14,120.13-120.14  c0.38,0,0.74,0.03,1.11,0.03H598.5v60.9h-15.17c9.96,17.49,15.68,37.69,15.68,59.22c0,52.25-33.55,96.8-80.23,113.29  c32.09,14.79,54.42,47.23,54.42,84.81c0,51.48-41.88,93.35-93.35,93.35c-51.47,0-93.34-41.87-93.34-93.35  c0-37.26,21.94-69.47,53.58-84.44C392.81,302.76,358.73,257.93,358.73,205.27z M517.39,403.37c0-20.7-16.84-37.55-37.55-37.55  c-20.7,0-37.54,16.84-37.54,37.55c0,20.7,16.84,37.55,37.54,37.55C500.55,440.92,517.39,424.07,517.39,403.37z M414.53,205.27  c0,35.47,28.86,64.33,64.33,64.33c35.47,0,64.33-28.86,64.33-64.33c0-35.48-28.86-64.33-64.33-64.33  C443.39,140.93,414.53,169.79,414.53,205.27z M35.07,69.16c18.82,0,34.08-15.26,34.08-34.08C69.15,16.26,53.9,1,35.07,1  C16.26,1,1,16.26,1,35.08C1,53.9,16.26,69.16,35.07,69.16z"
                  />
                </svg>
              </h3>

              <p className={styles.date}>Front-End Engineer</p>
              <p className={styles.date}>November 2017 - Present</p>
              <p className={styles.copy_italic}>
                "Build and deploy digital products in an agile development
                environment".
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
            <article>
              <div className={styles.listItemWrapper}>
                <h3 className={styles.headerSub}>Touchpoint Group</h3>
                <p className={styles.date}>Front-End Web Developer</p>
                <p className={styles.date}>May 2014 - November 2017</p>
                <p className={styles.copy_italic}>
                  "Build and maintain responsive websites and email campaigns".
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
                <p className={styles.date}>Front-End Web Developer</p>
                <p className={styles.date}>December 2011 - May 2014</p>
                <p className={styles.copy_italic}>
                  "Produce, modify and maintain website and web application user
                  interfaces".
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
                <p className={styles.date}>Systems Support Analyst</p>
                <p className={styles.date}>July 2004 - February 2011</p>
                <p className={styles.copy_italic}>
                  "Provide technical support for all I.T systems at the Ministry
                  of Justice's Auckland Collections Contact Centre and District
                  Courts".
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

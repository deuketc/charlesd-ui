import styles from './Education.module.scss';

const Education = () => {
  return (
    <div className={styles.education}>
      <div className={styles.wrapper}>
        <article className="cf">
          <h2 className={styles.header}>Education</h2>

          <div className={styles.flex}>
            <div className={styles.resumeEducation__col}>
              <h3 className={styles.resumeEducation__headerSub}>
                Media Design School
              </h3>
              <p className={styles.resumeEducation__date}>
                Diploma of Digital Media
              </p>
              <p className={styles.resumeEducation__date}>
                February 2011 - December 2011
              </p>
              <h4 className={styles.resumeEducation__headerItal}>Projects</h4>
              <div>
                <details className={styles.resumeEducation__details}>
                  <summary className={styles.resumeEducation__summary}>
                    Stephen Wiltshire - Artist Portfolio
                  </summary>
                  <div className={styles.resumeEducation__detailsListItem}>
                    <p>
                      <span className={styles.resumeEducation__headerItal}>
                        Brief:
                      </span>{' '}
                      Pick a favourite visual Artist that is currently living,
                      and that you have access to at least 15 visual samples of
                      their work. Analyze the visual style of the Artist in
                      order to create a Brand concept around the artist.
                    </p>
                    <p className={styles.resumeEducation__date}>
                      XHTML, CSS, JavaScript
                    </p>
                    {/* <p>
                      <a
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                        href="http://charlesd.co.nz/artist/"
                      >
                        Launch
                      </a>
                    </p> */}
                  </div>
                </details>
                <details className={styles.resumeEducation__details}>
                  <summary className={styles.resumeEducation__summary}>
                    Zen Bathrooms - Client Summative
                  </summary>
                  <div className={styles.resumeEducation__detailsListItem}>
                    <p>
                      <span className={styles.resumeEducation__headerItal}>
                        Brief:
                      </span>{' '}
                      Using the skills given to you in the course so far you
                      will be able to produce a well designed, cohesive and
                      usable website with a wordpress content management system
                      allowing the client to easily update all content on the
                      website.
                    </p>
                    <p className={styles.resumeEducation__date}>
                      Tech: HTML5 &amp; CSS
                    </p>
                    {/* <p>
                      <a
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                        href="http://charlesd.co.nz/zen/"
                      >
                        Launch
                      </a>
                    </p> */}
                  </div>
                </details>
              </div>
            </div>

            <div className={styles.resumeEducation__col}>
              <h3 className={styles.resumeEducation__headerSub}>
                Manukau Institute of Technology
              </h3>
              <p className={styles.resumeEducation__date}>
                Bachelor of Information Systems
              </p>
              <p className={styles.resumeEducation__date}>
                Feburary 1999 - December 2003
              </p>
              <h4 className={styles.resumeEducation__headerItal}>Prospectus</h4>
              <div>
                <details className={styles.resumeEducation__details}>
                  <summary className={styles.resumeEducation__summary}>
                    National Diploma in Business Computing
                  </summary>
                  <ul className={styles.resumeEducation__detailsList}>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Writing and Critical Thinking</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Design Principles</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Business Accounting</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Emerging Technology</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Information Systems</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Operating Systems and Networks</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>WX100 - Work Experience</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>MA300 - Multimedia Applications</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>PJ300 - Project</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>IN210 - Website Administration</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>
                        EC310 - E-commerce Website Design (Merit Pass)
                      </span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>PJ300 - Project</span>
                    </li>
                  </ul>
                </details>
                <details className={styles.resumeEducation__details}>
                  <summary className={styles.resumeEducation__summary}>
                    Diploma in Business Computing
                  </summary>
                  <ul className={styles.resumeEducation__detailsList}>
                    <li>
                      <details
                        className={styles.resumeEducation__detailsLevel2}
                      >
                        <summary
                          className={styles.resumeEducation__summaryLevel2}
                        >
                          Database Management Systems 1 (cluster)
                        </summary>
                        <ul
                          className={styles.resumeEducation__detailsListLevel2}
                        >
                          <li
                            className={
                              styles.resumeEducation__detailsListLevel2Item
                            }
                          >
                            <span>PY200 - Prototyping Concepts</span>
                          </li>
                          <li
                            className={
                              styles.resumeEducation__detailsListLevel2Item
                            }
                          >
                            <span>
                              PR114 - Programming Access with Visual Basic
                            </span>
                          </li>
                          <li
                            className={
                              styles.resumeEducation__detailsListLevel2Item
                            }
                          >
                            <span>FG200 - Fourth Generation Languages</span>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details
                        className={styles.resumeEducation__detailsLevel2}
                      >
                        <summary
                          className={styles.resumeEducation__summaryLevel2}
                        >
                          C2 Programming (cluster)
                        </summary>
                        <ul
                          className={styles.resumeEducation__detailsListLevel2}
                        >
                          <li
                            className={
                              styles.resumeEducation__detailsListLevel2Item
                            }
                          >
                            <span>PR250 - Dynamic Programming</span>
                          </li>
                          <li
                            className={
                              styles.resumeEducation__detailsListLevel2Item
                            }
                          >
                            <span>
                              PR300 - Advanced Programming C++ (Merit Pass)
                            </span>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details
                        className={styles.resumeEducation__detailsLevel2}
                      >
                        <summary
                          className={styles.resumeEducation__summaryLevel2}
                        >
                          Business (cluster)
                        </summary>
                        <ul
                          className={styles.resumeEducation__detailsListLevel2}
                        >
                          <li
                            className={
                              styles.resumeEducation__detailsListLevel2Item
                            }
                          >
                            <span>EC200 - E-Commerce</span>
                          </li>
                          <li
                            className={
                              styles.resumeEducation__detailsListLevel2Item
                            }
                          >
                            <span>BA220 - Business Applications</span>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>
                        PR220 - Programming C, further programming techniques
                      </span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>PJ300 - Project</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>IN210 - Website Administration</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>
                        EC310 - E-commerce Website Design (Merit Pass)
                      </span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>PJ300 - Project</span>
                    </li>
                  </ul>
                </details>
                <details className={styles.resumeEducation__details}>
                  <summary className={styles.resumeEducation__summary}>
                    Certificate in Business Computing
                  </summary>
                  <ul className={styles.resumeEducation__detailsList}>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>BC100 - Business Communications</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>IP100 - Interpersonal Skills</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>SP100 - Software Applications</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>SP200 - Software Support</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>SF100 - Software Fundamentals</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>DB100 - Database Management Systems</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>HS100 - PC Hardware and Skills</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>NM100 - Network Management</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>OS100 - Operating Systems Software</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>PD100 - Program Development</span>
                    </li>
                    <li>
                      <details
                        className={styles.resumeEducation__detailsLevel2}
                      >
                        <summary
                          className={styles.resumeEducation__summaryLevel2}
                        >
                          Programming Using C (cluster)
                        </summary>
                        <ul
                          className={styles.resumeEducation__detailsListLevel2}
                        >
                          <li
                            className={
                              styles.resumeEducation__detailsListLevel2Item
                            }
                          >
                            <span>PP101 Programming Principles</span>
                          </li>
                          <li
                            className={
                              styles.resumeEducation__detailsListLevel2Item
                            }
                          >
                            <span>PP111 Further Programming Principles</span>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>HF100 - Hardware Fundamentals</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>SO100 - Systems Overview</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>BA100 - Business Accounting</span>
                    </li>
                  </ul>
                </details>
                <details className={styles.resumeEducation__details}>
                  <summary className={styles.resumeEducation__summary}>
                    Certificate in Computing
                  </summary>
                  <ul className={styles.resumeEducation__detailsList}>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Accounts Payable</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Accounts Receivable</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Computer Careers</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Using Computer Databases</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Desktop Publishing (Merit Pass)</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Interpersonal Communication</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Information Systems in Organizations</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Using Math's For Business</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Using Computer Networks (Merit Pass)</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Using PC Operating Systems</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Using a Personal Computer</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Using a Structure Approach to Programming</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Using Computer Spreadsheets</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Study Skills</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Written Communication</span>
                    </li>
                    <li className={styles.resumeEducation__detailsListItem}>
                      <span>Word Processing and Communication</span>
                    </li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
export default Education;

import { useRef, useLayoutEffect } from 'react';
import styles from './IagDeveloper.module.scss';
import CopySection from '../CopySection/CopySection';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Iprops {
  isLoaded: boolean;
}

const IagDeveloper = ({isLoaded}: Iprops) => {
  const wrapper = useRef(null);
  const articleRef_01_header = useRef(null);
  const articleRef_01_copy = useRef(null);
  const articleRef_01_date = useRef(null);
  const articleRef_01_li_01 = useRef(null);
  const articleRef_01_li_02 = useRef(null);
  const articleRef_01_li_03 = useRef(null);

  const articleRef_01_number = useRef(null);
  const articleRef_02_header = useRef(null);
  const articleRef_02_copy = useRef(null);
  const articleRef_02_number = useRef(null);
  const articleRef_02_date = useRef(null);
  const articleRef_02_li_01 = useRef(null);
  const articleRef_02_li_02 = useRef(null);
  const articleRef_02_li_03 = useRef(null);

  const articleRef_03_header = useRef(null);
  const articleRef_03_copy = useRef(null);
  const articleRef_03_number = useRef(null);
  const articleRef_03_date = useRef(null);
  const articleRef_03_li_01 = useRef(null);
  const articleRef_03_li_02 = useRef(null);
  const articleRef_03_li_03 = useRef(null);

  useLayoutEffect(() => {

      let ctx = gsap.context(() => {

        // set article #2
        gsap.set(articleRef_02_header.current, {
          opacity: 0,
          x: 110,
        });

        gsap.set(articleRef_02_copy.current, {
          opacity: 0,
          x: 110,
        });

        gsap.set(articleRef_02_number.current, {
          opacity: 0,
          y: 110,
        });

        gsap.set(articleRef_02_date.current, {
          opacity: 0,
          x: 110,
        });

        // set article #3
        gsap.set(articleRef_03_header.current, {
          opacity: 0,
          x: 110,
        });

        gsap.set(articleRef_03_copy.current, {
          opacity: 0,
          x: 110,
        });

        gsap.set(articleRef_03_date.current, {
          opacity: 0,
          x: 110,
        });

        gsap.set(articleRef_03_number.current, {
          opacity: 0,
          y: 110,
        });

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper.current,
            start: 'top 0',
            end: '+=3000',
            scrub: true,
            pin: true,
          },
        });

        ScrollTrigger.refresh()

        // hide section #1
        tl.to(articleRef_01_header.current, {
          opacity: 0,
          x: 110,
          duration: 1,
          delay:2
        })
        .to(articleRef_01_date.current, {
          opacity: 0,
          x: 110,
          duration: 1,
        })
          .to(articleRef_01_copy.current, {
            opacity: 0,
            x: 110,
            duration: 1,
          })

          .to(articleRef_01_number.current, {
            opacity: 0,
            y: 110,
            duration: 1,
          },"-=3")

          // show section #2
          .to(articleRef_02_header.current, {
            opacity: 1,
            x: 0,
            duration: 1,
          }, )
          .to(articleRef_02_date.current, {
            opacity: 1,
            x: 0,
            duration: 1,
          })
          .to(articleRef_02_copy.current, {
            opacity: 1,
            x: 0,
            duration: 1,
          })

          .to(articleRef_02_number.current, {
            opacity: 1,
            y: 0,
            duration: 1,
          },"-=3")



          // hide section #2
          .to(articleRef_02_header.current, {
            opacity: 0,
            x: 110,
            duration: 1,
            delay:2
          })
          .to(articleRef_02_date.current, {
            opacity: 0,
            x: 110,
            duration: 1,
          })
          .to(articleRef_02_copy.current, {
            opacity: 0,
            x: 110,
            duration: 1,
          })

          .to(articleRef_02_number.current, {
            opacity: 0,
            y: 110,
            duration: 1,
          },"-=3")




          // show section #3
          .to(articleRef_03_header.current, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay:2
          })
          .to(articleRef_03_date.current, {
            opacity: 1,
            x: 0,
            duration: 1,
          })
          .to(articleRef_03_copy.current, {
            opacity: 1,
            x: 0,
            duration: 1,
          })
          .to(articleRef_03_number.current, {
            opacity: 1,
            y: 0,
            duration: 1,
          },"-=2")
          ;
      });
   console.log("useEffect IagDeveloper")
    return () => ctx.revert();

  }, [isLoaded]);

  return (
    <section className={styles.developer}>
      <CopySection
        paddingTop={true}
        title="Developer Progression"
        body="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pretium hendrerit elementum. Duis eget arcu augue. Morbi facilisis lorem ac justo aliquet euismod."
      />
      <div ref={wrapper} className={styles.developer__wrapper}>
        
        <article className={styles.developer__article}>
          <div className={styles.developer__cols}>
            <div className={styles.developer__cols_col1}>
              <div className={styles.developer__card}>
                <p className={styles.developer__card_date}>Feb 2001 - Dec 2005</p>
                <h2 className={`${styles.developer__card_title}`}>Developer<span className={styles.developer__card_title_lvl}>.level</span></h2>
                
                <p
                  ref={articleRef_01_number}
                  className={styles.developer__copy_level}
                >
                  1
                </p>
              </div>
            </div>
            <div className={styles.developer__cols_col2}>
              <h3
                ref={articleRef_01_header}
                className={styles.developer__copy_l3}
              >
                Varius egestas
              </h3>
              <p
                ref={articleRef_01_copy}
                className={styles.developer__copy_description}
              >
                Nullam eros velit, iaculis in venenatis sit amet, finibus non
                velit. Aliquam porttitor finibus lectus et congue.
              </p>
              <ul>
                <li ref={articleRef_01_li_01}>Nulla sed sodales tristique at hendrerit ipsum</li>
                <li ref={articleRef_01_li_02}>lobortis elit sodales tristique at </li>
                <li ref={articleRef_01_li_03}>Metus lobortis elit sodales </li>
              </ul>
            </div>
          </div>
        </article>
        <article className={styles.developer__article}>

          <div className={styles.developer__cols}>
            <div className={styles.developer__cols_col1}>
              <div className={styles.developer__card}>
              <p className={styles.developer__card_date}>Feb 2001 - Dec 2005</p>
                <h2 className={`${styles.developer__card_title}`}>Developer<span className={styles.developer__card_title_lvl}>.level</span></h2>
                
                <p
                  ref={articleRef_02_number}
                  className={styles.developer__copy_level}
                >
                  2
                </p>
                
              </div>
            </div>
            <div className={styles.developer__cols_col2}>
              <h3
                ref={articleRef_02_header}
                className={styles.developer__copy_l3}
              >
                Varius egestas
              </h3>
              <p
                ref={articleRef_02_copy}
                className={styles.developer__copy_description}
              >
                Nullam eros velit, iaculis in venenatis sit amet, finibus non
                velit. Aliquam porttitor finibus lectus et congue.
              </p>
              <ul>
                <li ref={articleRef_02_li_01}>Nulla sed sodales tristique at hendrerit ipsum</li>
                <li ref={articleRef_02_li_02}>lobortis elit sodales tristique at </li>
                <li ref={articleRef_02_li_03}>Metus lobortis elit sodales </li>
              </ul>
            </div>
          </div>
        </article>
        <article className={styles.developer__article}>
          <div className={styles.developer__cols}>
            <div className={styles.developer__cols_col1}>
              <div className={styles.developer__card}>
                <p className={styles.developer__card_date}>Feb 2001 - Dec 2005</p>
                <h2 className={`${styles.developer__card_title}`}>Developer<span className={styles.developer__card_title_lvl}>.level</span></h2>
                
                <p
                  ref={articleRef_03_number}
                  className={styles.developer__copy_level}
                >
                  3
                </p>
                
              </div>
            </div>
            <div className={styles.developer__cols_col2}>
              <h3
                ref={articleRef_03_header}
                className={styles.developer__copy_l3}
              >
                Varius egestas
              </h3>
              <p
                ref={articleRef_03_copy}
                className={styles.developer__copy_description}
              >
                Nullam eros velit, iaculis in venenatis sit amet, finibus non
                velit. Aliquam porttitor finibus lectus et congue.
              </p>
              <ul>
                <li ref={articleRef_03_li_01}>Nulla sed sodales tristique at hendrerit ipsum</li>
                <li ref={articleRef_03_li_02}>lobortis elit sodales tristique at </li>
                <li ref={articleRef_03_li_03}>Metus lobortis elit sodales </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default IagDeveloper;

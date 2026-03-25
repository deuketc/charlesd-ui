import { useRef, useLayoutEffect } from 'react';
import styles from './NumberCountAnimation.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface NumberCountAnimationProps {
  number: string;
}

const NumberCountAnimation = ({ number }: NumberCountAnimationProps) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const target = parseFloat(number);
    if (isNaN(target) || !countRef.current || !containerRef.current) return;

    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = Number.isInteger(target)
              ? Math.round(obj.val).toString()
              : obj.val.toFixed(1);
          }
        },
      });
    });

    return () => ctx.revert();
  }, [number]);

  return (
    <div ref={containerRef} className="">
      <p>
        <span className={styles.numberCount_count}>
          <span ref={countRef}>0</span>
          <span className={styles.numberCount_attribute}>+</span>
        </span>
      </p>
    </div>
  );
};

export default NumberCountAnimation;

import React from 'react';
import styles from './SectionWrapper.module.scss';

interface SectionWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
  width?: string;
  maxWidth?: string;
  paddingTop?: boolean;
  paddingBottom?: boolean;
  align?: 'left' | 'center' | 'right';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  backgroundColor,
  width,
  maxWidth,
  paddingTop,
  paddingBottom,
  align,
}) => {
  return (
    <section
      className={styles.section_container}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div
        className={`${styles.section_content_wrapper} ${
          paddingTop ? styles.padding_top : ''
        } ${paddingBottom ? styles.padding_bottom : ''} `.trim()}
        style={{
          ...(width && { width }),
        }}
      >
        <div
          className={`${align ? styles[`align_${align}`] : ''}`}
          style={{ ...(maxWidth && { maxWidth }) }}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;

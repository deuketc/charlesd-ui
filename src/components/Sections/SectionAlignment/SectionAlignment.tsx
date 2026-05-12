import { ReactNode } from 'react';
import styles from './SectionAlignment.module.scss';

type Alignment = 'left' | 'center' | 'right';
type Breakpoint = 'mobile' | 'tablet' | 'desktop';

interface IProps {
  children: ReactNode;
  alignment?: Alignment;
  breakpoint?: Breakpoint;
  width?: string;
  maxWidth?: string;
}

const breakpointClass: Record<Breakpoint, string> = {
  mobile: styles.applyAtMobile,
  tablet: styles.applyAtTablet,
  desktop: styles.applyAtDesktop,
};

const SectionAlignment = ({
  children,
  alignment = 'center',
  breakpoint = 'mobile',
  width,
  maxWidth,
}: IProps) => {
  const marginLeft = alignment === 'left' ? '0' : 'auto';
  const marginRight = alignment === 'right' ? '0' : 'auto';

  return (
    <div
      className={breakpointClass[breakpoint]}
      style={
        {
          '--sa-width': width,
          '--sa-max-width': maxWidth,
          '--sa-margin-left': marginLeft,
          '--sa-margin-right': marginRight,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default SectionAlignment;

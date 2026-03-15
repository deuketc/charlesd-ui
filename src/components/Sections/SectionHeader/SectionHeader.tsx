import React from 'react';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  style?: 'copy' | 'L1' | 'L2' | 'L3' | 'L4';
  color?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  h1,
  h2,
  h3,
  h4,
  style,
  color,
  textAlign,
}) => {
  return (
    <div
      style={{
        ...(color && { color }),
        ...(textAlign && { textAlign }),
      }}
    >
      {h1 && <h1 className={style ? styles[style] : undefined}>{h1}</h1>}
      {h2 && <h2 className={style ? styles[style] : undefined}>{h2}</h2>}
      {h3 && <h3 className={style ? styles[style] : undefined}>{h3}</h3>}
      {h4 && <h4 className={style ? styles[style] : undefined}>{h4}</h4>}
    </div>
  );
};

export default SectionHeader;

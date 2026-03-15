import React from 'react';
import styles from './SectionColumns.module.scss';

interface SectionColumnsProps {
  children: React.ReactNode;
}

const SectionColumns: React.FC<SectionColumnsProps> = ({ children }) => {
  const childCount = React.Children.count(children);
  const columnClass = `sectionColumns${childCount}`;

  return (
    <div className={styles[columnClass]}>
      {React.Children.map(children, child => (
        <div>{child}</div>
      ))}
    </div>
  );
};

export default SectionColumns;

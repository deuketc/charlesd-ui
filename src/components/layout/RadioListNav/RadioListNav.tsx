import styles from './RadioListNav.module.scss';

interface Iprops {
  images: string[];
  currentIndex: number;
  onChangeFunc: Function;
  radioListName: string;
}

const RadioListNav = ({
  images,
  currentIndex,
  onChangeFunc,
  radioListName,
}: Iprops) => {
  return (
    <nav className={styles.sliderNav}>
      <div className={styles.sliderNav__wrapper}>
        {images.map((image, index) => {
          return (
            <div key={index} className={styles.sliderNav__item}>
              <input
                className={styles.sliderNav__item_radio}
                type="radio"
                id={`${radioListName}${index.toString()}`}
                name={radioListName}
                value={image}
                onChange={() => onChangeFunc(index)}
                checked={index === currentIndex}
              />
              <label
                className={styles.sliderNav__item_label}
                htmlFor={`${radioListName}${index.toString()}`}
              >
                {index + 1}
              </label>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default RadioListNav;

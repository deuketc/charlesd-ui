import styles from './Spinner.module.scss';
import loaderGif from '../../../assets/images/loading_icon.gif'

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinner__wrapper}>
        <img src={loaderGif} />
      </div>
    </div>
  );
};

export default Spinner;

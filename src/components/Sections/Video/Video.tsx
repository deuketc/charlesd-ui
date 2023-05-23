import styles from './Video.module.scss';

interface IProps {
  backgroundColor: string;
  src: string;
}

const Video = ({ backgroundColor, src }: IProps) => {
  return (
    <div
      className={styles.video}
      style={{ backgroundColor: backgroundColor ? backgroundColor : '#ffffff' }}
    >
      <div className={styles.embedContainer}>
        <iframe
          src={`${src}&controls=0&border=0`}
          width="640"
          height="480"
          frameBorder={0}
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;

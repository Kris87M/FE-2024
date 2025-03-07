import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {

    const formatTime = (time) => {
        let milliseconds = Math.floor((time % 1000));
        let seconds = Math.floor((time / 1000) % 60);
        let minutes = Math.floor((time / (1000 * 60)) % 60);
        let hours = Math.floor((time / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds <10) ? "00" + milliseconds : (milliseconds <100) ? "0" + milliseconds : milliseconds;

        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

  return (
    <div className={styles.formattedTime}>
       <h1>{formatTime(time)}</h1>
    </div>
  );

};

export default FormattedTime;
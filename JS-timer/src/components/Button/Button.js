import styles from './Button.module.scss';

const Button = props => {

  return (
    <div>
      <button className={styles.button} onClick={props.start}>START</button>
      <button className={styles.button} onClick={props.stop}>STOP</button>
      <button className={styles.button} onClick={props.reset}>RESET</button>
    </div>
  );
}

export default Button;
import styles from './PageTitle.module.scss';

const PageTitle = props => {
  return (
      <div className={styles.hero}>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.subtitle}>{props.subtitle}</p>
      </div>
  )
}

export default PageTitle;

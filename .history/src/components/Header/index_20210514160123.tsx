import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="" />
        <a className={styles.active} href="">Home</a>
        <a href="">Posts</a>
      </div>
    </header>
  )
}
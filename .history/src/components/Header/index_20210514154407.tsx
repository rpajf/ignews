import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headeontent}>
        <img src="/images/logo.svg" alt="" />
        <a>Home</a>
        <a>Posts</a>
      </nav>
    </header>
  )
}
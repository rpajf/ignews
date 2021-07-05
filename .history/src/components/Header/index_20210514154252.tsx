import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header-container}>
      <nav className={styles.header-content}>
        <img src="/images/logo.svg" alt="" />
        <a>Home</a>
        <a>Posts</a>
      </nav>
    </header>
  )
}
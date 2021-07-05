import styles from './styles.module.scss'
import { SignIn} from '../SignInButton/index'
export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>

        <img src="/images/logo.svg" alt="" />
        <nav>
        <a className={styles.active} href="">Home</a>
        <a href="">Posts</a>
        <a href="">Posts</a>


        </nav>
      </div>
    </header>
  )
}
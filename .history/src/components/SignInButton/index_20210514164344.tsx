import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'
export const SignInButton = () => {
  return (
    <button className={styles.signinButton}>
      <FaGithub/>
      <img src="/images/gitLogo.svg" alt="exit-button" />



    </button>
  )
}
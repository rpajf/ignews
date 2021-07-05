import { FaGithub , Faer} from 'react-icons/fa'
import styles from './styles.module.scss'
export const SignInButton = () => {
  return (
    <button className={styles.signinButton}>
      <FaGithub/>
      <img src="/images/exit.svg" alt="exit-button" />



    </button>
  )
}
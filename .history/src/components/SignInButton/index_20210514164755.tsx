import { FaGithub , FaX} from 'react-icons/fa'
import styles from './styles.module.scss'
export const SignInButton = () => {
  return (
    <button className={styles.signinButton}>
      <FaGithub color="#eba417"/>
      <img src="/images/exit-button.svg" alt="exit-button" />



    </button>
  )
}
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'
export const SignInButton = () => {
  const [isLogged, setLogged ] = useState<boolean>();
  const isUserLogged = false;
  return isUserLogged ? (
    <button className={styles.signinButton}>
      <FaGithub color="#eba417"/>
      <img src="/images/exit-button.svg" alt="exit-button" />
    </button>
  ) : (
    <button className={styles.signinButton}>
      <FaGithub color="#04D361"/>
      <img src="/images/exit-button.svg" alt="exit-button" />
    </button>
  )
}
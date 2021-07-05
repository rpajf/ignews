import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'
export const SignInButton = () => {
  const [isLogged, setLogged ] = useState<boolean>();
  const isUserLogged = false;
  return isUserLogged ? (
    <button className={styles.signinButton}>
      <FaGithub color="#eba417"/>
      Raphael Portela
      <FiX color="#737380"/>
    </button>
  ) : (
    <button className={styles.signinButton}>
      <FaGithub color="#04D361"/>
      Sign in with Github
      <FiX color="#737380"/>
    </button>
  )
}
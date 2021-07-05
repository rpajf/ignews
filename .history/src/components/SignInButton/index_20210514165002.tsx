import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'
export const SignInButton = () => {
  const [isLogged, setLogged ] = useState<boolean>();
  const isUserLogged = true;
  return isUserLogged
}
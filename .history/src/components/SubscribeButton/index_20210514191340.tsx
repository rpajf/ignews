import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

import styles from './styles.module.scss'

interface SubscribeButtonProps{
  priceId: nu
}

export const SubscribeButton = () => {

  return (
    <button className={styles.subscribeButton}>
      Subscribe Now
    </button>
  )
}
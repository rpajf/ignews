import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

import styles from './styles.module.scss'

interface SubscribeButtonProps{
  priceId: number
}

export const SubscribeButton = ({} : SubscribeButtonProps) => {

  return (
    <button className={styles.subscribeButton}>
      Subscribe Now
    </button>
  )
}
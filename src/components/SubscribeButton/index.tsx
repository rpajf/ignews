import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

import styles from './styles.module.scss'

interface SubscribeButtonProps{
  priceId: string
}

export const SubscribeButton = ({ priceId } : SubscribeButtonProps) => {
  function handleSubscribe(){}

  return (
    <button className={styles.subscribeButton}>
      Subscribe Now
    </button>
  )
}
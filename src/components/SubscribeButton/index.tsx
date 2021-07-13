import { signIn, useSession } from 'next-auth/client'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import styles from './styles.module.scss'


interface SubscribeButtonProps{
  priceId: string
}

export const SubscribeButton = ({ priceId } : SubscribeButtonProps) => {
  const [session] = useSession()
  async function handleSubscribe(){
    if(!session){
      signIn('github')
      return
    }
    try {
      const response = await api.post('subscribe')
      const {sessionId} = response.data

      const stripe = await getStripeJs()

      stripe.redirectToCheckout({sessionId: sessionId})
    } catch (error) {
      alert(error.message)
      
    }
    //criacao da checkout session
  }

  return (
    <button  className={styles.subscribeButton} onClick={handleSubscribe}>
      Subscribe Now
    </button>
  )
}
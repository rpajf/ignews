import { GetStaticProps } from 'next'
import { stripe } from '../services/stripe'
import Head from 'next/head'
import styles from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton'

interface HomeProps{
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
       <> 
        <Head>
        <title>Inicio</title>
        </Head>

        <main className={styles.mainContainer}>
          <section className={styles.sectionContent}>
            <span>👏 Hey, welcome</span>
            <h1>News about the <span>React</span> <span>world</span></h1>

            <p>Get acess to all publications <span>for {product.amount} month</span></p>
            <SubscribeButton priceId={product.priceId}/>
          </section>

          <img src="/images/avatar.svg" alt="Girl coding" />
        </main>
       </> 


  )
}
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1Ir8gDKaBo6zUtp1ZFsMLAj2', {
    expand: ['product']
  })
  const product = {
    priceId : price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props:{
      product
    },
    revalidate: 60 * 60 * 24//
    //reconstruir a pagina gerada estaticamente a cada
    //determinado periodo de tempo
    
  }
}
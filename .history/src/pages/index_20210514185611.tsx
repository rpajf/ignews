import { GetServerSideProps } from 'next'

import Head from 'next/head'
import styles from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton'

export default function Home() {
  return (
       <> 
        <Head>
        <title>Inicio</title>
        </Head>

        <main className={styles.mainContainer}>
          <section className={styles.sectionContent}>
            <span>👏 Hey, welcome</span>
            <h1>News about the <span>React</span> <span>world</span></h1>

            <p>Get acess to all publications <span>for R$9,90 month</span></p>
            <SubscribeButton/>
          </section>

          <img src="/images/avatar.svg" alt="Girl coding" />
        </main>
       </> 


  )
}

import Head from 'next/head'
import styles from './home.module.scss'

export default function Home() {
  return (
       <> 
        <Head>
        <title>Inicio</title>
        </Head>

        <main className={styles.mainContainer}>
          <section className>
            <span>Hey, welcome</span>
            <h1>News about the <span>React</span> <span>world</span></h1>

            <p>Get acess to all publications <span>for R$9,90 month</span></p>

          </section>

          <img src="/images/avatar.svg" alt="Girl coding" />
        </main>
       </> 


  )
}
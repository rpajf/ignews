import Head from 'next/head'
import styles from './home.module.scss'

export default function Home() {
  return (
       <> 
        <Head>
        <title>Inicio</title>
        </Head>

        <main className={main}>
          <section>
            <span>Hey, welcome</span>
            <h1>News about the <span>React</span> <span>world</span></h1>

            <p>Get acess to all publications for R$9,90 month</p>

          </section>

          <img src="/images/avatar.svg" alt="Girl coding" />
        </main>
       </> 


  )
}

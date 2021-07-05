import { GetServerSideProps } from 'next'

import Head from 'next/head'
import styles from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton'
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const handler = nextConnect().use(databaseMiddleware)
  try {
    await handler.run(req, res)
    const sliderProperties = await getHomePageProperties()
    const latestProperties = await getLatestProperties()
    return {
      props: {
        sliderProperties: JSON.parse(JSON.stringify(sliderProperties)),
        latestProperties: JSON.parse(JSON.stringify(latestProperties))
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: { sliderProperties: [], latestProperties: [] }
    }
  }
}
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

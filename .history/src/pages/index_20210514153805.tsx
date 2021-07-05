import styles from '../styles/home.module.scss'
import { Header} from '../components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    
    <h1 className={styles.title}>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>
       hello <span>world</span></h1>
  )
}

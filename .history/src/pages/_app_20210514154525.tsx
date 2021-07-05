import { AppProps } from 'next/app'
import {Header }
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Header/>
    <Component {...pageProps} />
  </> 
  )
}

export default MyApp

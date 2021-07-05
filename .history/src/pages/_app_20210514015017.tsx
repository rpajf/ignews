import { AppProps } from 'next/app'
import '../styles/global.sc'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

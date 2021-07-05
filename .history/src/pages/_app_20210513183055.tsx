import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: ap) {
  return <Component {...pageProps} />
}

export default MyApp

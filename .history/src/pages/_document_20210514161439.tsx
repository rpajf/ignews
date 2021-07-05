import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

export default class MyDocument extends Document{
  render(){
    return(
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="flavi"/>
        </Head>
        <body>
          <Main/>
          <NextScript></NextScript>
        </body>
      </Html>
    )
  }

}
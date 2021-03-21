import '../styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import wrapper from '@store'
import GlobalStyle from '@src/lib/GlobalStyle'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)

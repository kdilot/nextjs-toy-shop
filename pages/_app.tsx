import '../styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import wrapper from '@store'
import GlobalStyle from '@src/lib/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Theme from 'styles/color'
import Wrapper from '@src/components/layoutWrapper'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={Theme['default']}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(MyApp)

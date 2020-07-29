import React, { useEffect } from 'react';
import { useRouter, Router } from 'next/router';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import { withRedux } from '../stateManagment/reduxWrapper';
import Layout from './layout';
import { theme } from '../theme/theme';
import "../theme/mehmoonchi.css";
import '../localize/i18n';
import { Localize } from './../localize/localize';

const App = ({ Component, pageProps, router }: AppProps) => {
  const mustRenderInLaylout = !router.pathname.includes('authentication');
  const sheets = new ServerStyleSheets();

  return (
    sheets.collect(
      <ThemeProvider theme={theme}>
        <Localize>
        {
          mustRenderInLaylout ? (
            <Layout>
              <Component {...pageProps } />
            </Layout >
          ) : (
              <Component {...pageProps} />
            )
        }
        </Localize>
      </ThemeProvider>
    )
  )
}



export default withRedux(App);

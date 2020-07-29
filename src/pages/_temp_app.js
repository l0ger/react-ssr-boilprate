/* eslint no-param-reassign: off */
/* eslint import/named: off */
import React from 'react';
import App from 'next/app';
import { ConfigProvider } from 'antd';
import Farsi from 'antd/lib/locale-provider/fa_IR';
import cookie from 'cookie';
import { compose } from 'redux';
import AdminLayout from '../components/AdminLayout';
import ModalRoot from '../components/Modal/ModalRoot';
import { request, serverRequestModifier } from '../store/request';
import { withRedux } from '../lib/redux';
import { withApollo } from '../lib/apollo';

class MyApp extends App {
  static async getInitialProps({ Component, ctx, store, apolloClient }) {
    const { req } = ctx;
    let pageProps = {};
    let allCookies;
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ...ctx,
        store,
        apolloClient,
      });
    }

    if (req) {
      allCookies = req.headers.cookie;

      /* this method set cookie to request ssr */
      await serverRequestModifier(req);
    }

    return { pageProps, allCookies };
  }

  componentDidMount() {
    const headers = cookie.parse(this.props.allCookies);
    if (headers) {
      request.addRequestTransform(apiReq => {
        apiReq.headers.Authorization = `Bearer ${headers.accessToken}`;
        apiReq.headers.Context = 'DORSA';
      });
    }
  }

  render() {
    const renderComponent = (path, pageProps) => {
      if (path.includes('/agreements')) {
        return <Component {...pageProps} />;
      }
      return (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      );
    };
    const { Component, pageProps, router } = this.props;

    return (
      <ConfigProvider locale={Farsi} direction="rtl">
        {renderComponent(router.pathname, pageProps)}
        <ModalRoot />
      </ConfigProvider>
    );
  }
}

export default compose(withApollo, withRedux)(MyApp);

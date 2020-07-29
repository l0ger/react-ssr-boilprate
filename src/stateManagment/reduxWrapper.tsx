import React, {FC} from 'react';
import { Provider } from 'react-redux';
import { NextComponentType, NextPageContext,NextPage } from 'next';
import { configureStore } from './store';
import initState from './initState';
import {Store} from 'redux';
import { State } from './../types/state';
import App from 'next/app';

export const initStore = (() => {
  let store:Store;
  return function(initialState:State) {
    if (typeof window === 'undefined') {
      return configureStore(initialState);
    }
    // Create store if unavailable on the client and set it on the window object
    if (!store) {
      store = configureStore(initialState);
    }
    return store;
  };
})();
export interface WrapperProps {
  initialProps: any; // stuff returned from getInitialProps
  initialState: any; // stuff in the Store state after getInitialProps
  pageProps?: any; // stuff from page's getServerSideProps or getInitialProps when used with App
}

export const withRedux = (PageComponent: NextComponentType | App | any, { ssr = true } = {}) => {
  // eslint-disable-next-line react/prop-types
  const WithRedux:NextPage<WrapperProps> = ({initialState, initialProps, ...pageProps}, context) => {
    //{ Component, pageProps }: AppProps
    const store = initStore(initState);
    return (
      <Provider store={store}>
        <PageComponent {...pageProps} />
      </Provider>
    );
  };

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component';

    WithRedux.displayName = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async (context:NextPageContext) => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const store = initStore(initState);

      // Run getInitialProps from HOCed PageComponent
      const pageProps =
        typeof PageComponent.getInitialProps === 'function'
          ? await PageComponent.getInitialProps({ ...context, store })
          : {};

      // Pass props to PageComponent
      return {
        ...pageProps,
        initialReduxState: store.getState(),
      };
    };
  }

  return WithRedux;
};

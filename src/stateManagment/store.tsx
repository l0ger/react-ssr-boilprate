import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import rootSaga from "../stateManagment/sagas/index";
import { State, SagaStore } from "../types/state"
import { reducers } from './reducer';
//import {GetServerSideProps, GetStaticProps, NextComponentType, NextPage, NextPageContext} from 'next';

//import function from './sagas/index';
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
  }
  
  const getComposeEnhanser = ()=> {
    const isServer = typeof window === 'undefined';
    const isDev = process.env.NODE_ENV === 'development';
     return (isDev && !isServer && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; 
  }

export const configureStore = (initialState:State) => {
    const composeEnhancers = getComposeEnhanser()
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware]
    
    const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
    return store;
};





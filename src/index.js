import './frontend/styles/index.css';
import App from './frontend/components/App';
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './frontend/reducers'
import { websocketMiddleware } from './frontend/websocket'

const initialState = {
  cells: [],
};

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(websocketMiddleware));
const store = createStore(reducer, initialState, enhancer);

render(
  <Provider store={store} >
    <App />
  </Provider >,
  document.getElementById('root')
);
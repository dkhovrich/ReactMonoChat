import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger';
import rootReducer from './reducers'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Chat from './components/Chat';

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Chat />
  </Provider>,
  document.getElementById('root'));

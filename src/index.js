import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { _findUserTimeZone } from './util/TimeZone';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  selectedPlayers: localStorage.getItem('selectedPlayers')
    ? JSON.parse(localStorage.getItem('selectedPlayers'))
    : [],
  timeZone: _findUserTimeZone(),
};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);

 ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

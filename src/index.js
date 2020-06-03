import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { App } from './pages/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ACTION_TYPES } from './redux/actionTypes/actionTypes';


const INITIAL_STATE = {};


const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ACTION_TYPES.INCREMENT:
      return state 
    default: 
    return state
  };  
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

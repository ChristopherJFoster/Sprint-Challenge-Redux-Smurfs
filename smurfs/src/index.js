import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';
import App from './components/App';
import './main.css';

const store = createStore(
  rootReducer, // this is the most basic reducer. A function that returns an object. Replace it.
  applyMiddleware(
    thunk,
    logger /* be sure to throw in the proper middlewares here*/
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

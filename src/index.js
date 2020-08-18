import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import * as serviceWorker from './serviceWorker';

import App from './App';

import apiServices from "./apiServices/instance";
import store from "./store";

apiServices();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={ store } >
          <Router>
              <App/>
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

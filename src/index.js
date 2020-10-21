import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router } from 'react-router-dom';
import { ContextProvider } from './context/Context';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';

import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ContextProvider>
    <Router basename="/">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </ContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

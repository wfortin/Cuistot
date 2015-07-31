import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory.js';
import App from './components/App';
import routes from './components/Routes'

const history = new BrowserHistory();

React.render(<Router history={history} children={routes}/>, document.getElementById('app'));

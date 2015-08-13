import Authentication from './src/Authentication';
import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import App from './components/App';
import routes from './components/Routes'

require('./css/App.css');

Authentication.checkToken();

const history = new BrowserHistory();

React.render(<Router history={history} children={routes}/>, document.getElementById('app'));

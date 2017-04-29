import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { StyleRoot } from 'radium';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Layout from '../../ui/Layout.jsx';
import routes from './routes.js';

// Layout is or main container(footer and nav-bar/header).
// Depending on routes the array 'routes' will render associated page.
const rootRoute = {
  component: Layout,
  childRoutes: routes,
};

Meteor.startup(() => {
  ReactDOM.render(
    <MuiThemeProvider>
      <StyleRoot>
        <Router history={browserHistory} routes={rootRoute} />
      </StyleRoot>
    </MuiThemeProvider>,
    document.getElementById('app')
  );
});
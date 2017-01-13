import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { StyleRoot } from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 	'#B71C1C',
    // primary2Color: cyan700,
    // primary3Color: grey400,
    // accent1Color: pinkA200,
    // accent2Color: grey100,
    // accent3Color: grey500,
    // textColor: darkBlack,
    // alternateTextColor: white,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    // pickerHeaderColor: cyan500,
    // clockCircleColor: fade(darkBlack, 0.07),
     //shadowColor: fullBlack,
  }
});

Meteor.startup(() => {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <StyleRoot>
        <Router history={browserHistory} routes={rootRoute} />
      </StyleRoot>
    </MuiThemeProvider>,
    document.getElementById('app')
  );
});
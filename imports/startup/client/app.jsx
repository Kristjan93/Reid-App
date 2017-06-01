import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { StyleRoot } from 'radium';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Routes from './Routes.jsx';

Meteor.startup(() => {
  render(
    <MuiThemeProvider>
      <StyleRoot>
        <Routes />
      </StyleRoot>
    </MuiThemeProvider>,
    document.getElementById('app')
  );
});
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { StyleRoot } from 'radium';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Routes from './Routes.jsx';

const themePalette = {
  primary1Color: '#FFFF',
  // primary2Color: cyan700,
  // primary3Color: grey400,
  // accent1Color: pinkA200,
  // accent2Color: grey100,
  // accent3Color: grey500,
  textColor: '#03a9f4',
  // alternateTextColor: white,
  // canvasColor: white,
  // borderColor: grey300,
  // disabledColor: fade(darkBlack, 0.3),
  // pickerHeaderColor: cyan500,
  // clockCircleColor: fade(darkBlack, 0.07),
  // shadowColor: fullBlack,
};

//const muiTheme = getMuiTheme({ palette: themePalette });

Meteor.startup(() => {
  render(
    <MuiThemeProvider >
      <StyleRoot>
        <Routes />
      </StyleRoot>
    </MuiThemeProvider>,
    document.getElementById('app')
  );
});
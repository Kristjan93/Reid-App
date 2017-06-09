import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router'; let _Link = Radium(Link);

import { mediaBreakpoints } from '/imports/ui/variables/breakpoints.js';

import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  root: {
    width: '100%', 
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    maxWidth: '680px',
  },
  header:{
    margin: '26px 0',
  },
  text: {
    lineHeight: '2.5rem',
    fontSize: '26px',
    margin: 0,
  },
  button: {
    margin: '26px 0',
    minWidth: '160px',

    buttonStyle: {
      height: '46px',
      lineHeight: '46px',
    },
    overlayStyle: {
      height: '46px',
    },
  }
};

const IntroTextBlock = (props) => {
  return (
    <div style={ styles.root }>
      <div style={ styles.container } >
        <h1 style={ styles.header }>
          Title
        </h1>
        <p style={ styles.text }>
          {lorem}
        </p>

        <RaisedButton
            style={ styles.button }
            buttonStyle={ styles.button.buttonStyle }
            overlayStyle={ styles.button.overlayStyle } 
            label="Our Tours"
            primary={true}
            containerElement={<_Link to='/tours' style={{ textDecoration: 'none' }} />} 
        />
      </div>
    </div>
  );
};

export default Radium(IntroTextBlock);

const lorem = 'We at Geysir horses  offer you a short riding tours, Suitable for both first time rider and experienced.  This  tour is ideal for families and those how like to visit Iceland and ride our wonderful horses in amazing landscape.'
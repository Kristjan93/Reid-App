import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router'; let _Link = Radium(Link);

import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  root: {
    width: '100%', 
    textAlign: 'center',
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    maxWidth: '680px',
  },
  text: {
    lineHeight: '2.5rem',
    fontSize: '26px',
    margin: 0,
  }
};

const IntroTextBlock = (props) => {
  return (
    <div style={ styles.root } >
      <div style={ styles.container } >
        <h1>
          Title
        </h1>
        <p style={ styles.text }>
          {lorem}
        </p>

        <RaisedButton
            style={{ marginTop: '10px', minWidth: '160px', }}
            buttonStyle={{ height: '46px', lineHeight: '46px' }}
            overlayStyle={{ height: '46px' }}
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
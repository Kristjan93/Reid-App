import React from 'react';
import Radium from 'radium';

import Avatar from 'material-ui/Avatar';

import { mediaBreakpoints } from '/imports//ui/variables/breakpoints.js';

const styles = {
  root: {
    minWidth: '250px',
    textAlign: 'center',
    width: '100%',
    marginBottom: '26px',
    '@media (min-width: 750px)': {
      width: '33.3333%',
      marginBottom: '0',
    },
  },
  title: {

  },
  text: {
    maxWidth: '300px',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    lineHight: '1.5rem',
    margin: '0 auto',
  },
};

const LandingPageInfoListItem = ({ title, text, avatar }) => {
  return (
    <div style={ styles.root }>
      <Avatar
        icon={avatar}
        size={150}
        backgroundColor={'#E91E63'}
      />
      
      <h2>{title}</h2>

      <p style={ styles.text }>
        {text}
      </p>
    </div>
  );
};

export default Radium(LandingPageInfoListItem);
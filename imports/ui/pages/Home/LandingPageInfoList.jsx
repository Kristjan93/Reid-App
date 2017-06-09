import React from 'react';
import Radium from 'radium';

import Book from 'material-ui/svg-icons/action/book';
import SmileFace from 'material-ui/svg-icons/editor/insert-emoticon';
import Info from 'material-ui/svg-icons/action/info';
//import Book from 'material-ui/svg-icons/action/book';

import LandingPageInfoListItem from './LandingPageInfoListItem.jsx';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

const LandingPageInfoList = (props) => {
  return (
    <div style={ styles.root }>
      <LandingPageInfoListItem
        title={'Booking'}
        text={text}
        avatar={<Book />}
      />
      <LandingPageInfoListItem
        title={'Service'}
        text={text}
        avatar={<SmileFace />}
      />
      <LandingPageInfoListItem
        title={'The icelandic horse'}
        text={text}
        avatar={<Info />}
      />
    
    </div>
  );
};

export default Radium(LandingPageInfoList);

// Booking
// Service
// Horse

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
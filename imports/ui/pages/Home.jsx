import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router'; let _Link = Radium(Link);

import RaisedButton from 'material-ui/RaisedButton';
import Email from 'material-ui/svg-icons/communication/email';

import { mediaBreakpoints } from '/imports/ui/variables/breakpoints.js';
import { FOR_3 } from '/imports/ui/variables/paths/Images.js';

import GoogleMap from '/imports/ui/common/GoogleMap.jsx';
import IntroTextBlock from './Home/IntroTextBlock.jsx';
import LandingPageInfoList from './Home/LandingPageInfoList.jsx';
import Carousel from '/imports/ui/common/Carousel.jsx';

const styles = {
  root: {
    width: '100%',
  },
  mapContainer: {
    margin: '26px 0',
    height: '500px',
  },
};

const Home = (props) => {
  return (
    <div style={ styles.root }>
      <Carousel />

      <IntroTextBlock />

      <LandingPageInfoList />

      <div style={ styles.mapContainer } className='my-google-map'>
        <GoogleMap />
      </div>
    </div>
  );
}

export default Radium(Home);

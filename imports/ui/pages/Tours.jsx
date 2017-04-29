import React from 'react';
import Radium from 'radium';

import TourList from '../components/TourList/TourList.jsx';
import { tourItems } from '../constants/tourItems.js';

const styles = {
};

class Tours extends React.Component {
  render() {
    return (
      <div style={{
        width: '100%',
        margin: '26px 0',
      }}>
        <TourList tours={tourItems} itemStyle={{ maxWidth: '500px' }}/>
      </div>
    );
  }
}

export default Radium(Tours);
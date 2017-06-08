import React from 'react';
import Radium from 'radium';

import { mediaBreakpoints } from '/imports/ui/variables/breakpoints.js';
import { _Tours } from '/imports/api/Tours.js';

import TourList from './Tours/TourList.jsx';

const styles = {
  Tours: {
    width: '100%',
    item: {
      [mediaBreakpoints.min.tablet]: {
        width: '50%',
      },
    },
    maxWidth: '1400px',
    //width: '100%',
    margin: '0 auto',
    //padding: '0 26px',
  }
};

const Tours = ({ ...rest }) => {
  tours = _Tours.get();

  return (
    <div style={styles.Tours}>
      <TourList tours={tours} itemStyle={styles.Tours.item}/>
    </div>
  );
}

export default Radium(Tours);
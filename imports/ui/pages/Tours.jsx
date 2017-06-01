import React from 'react';
import Radium from 'radium';

import { mediaBreakpoints } from '/imports/ui/variables/breakpoints.js';
import { _Tours } from '/imports/api/Tours.js';

import TourList from './Tours/TourList.jsx';

const styles = {
  Tours: {
    width: '100%',
    item: {
      [mediaBreakpoints.tablet]: {
        width: '50%',
      },
    },
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
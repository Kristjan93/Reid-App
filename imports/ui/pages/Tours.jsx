import React from 'react';
import Radium from 'radium';
import TourList from '../components/TourList/TourList.jsx';
import { mediaBreakpoints } from '../constants/breakpoints.js';

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

const Tours = ({ route, ...rest }) => {
  return (
    <div style={styles.Tours}>
      <TourList tours={route.data} itemStyle={styles.Tours.item}/>
    </div>
  );
}

export default Radium(Tours);
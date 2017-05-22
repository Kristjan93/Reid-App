import React from 'react';
import Radium from 'radium';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const SwipeableViewsAutoPlay = autoPlay(SwipeableViews); // SwipeableViews;

import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors'
import { FOR_1, FOR_2, FOR_3 } from '../constants/srcPictures.js';

const styles = {

};

const Slide = (props) => {
  return (
    <div style={{
      backgroundImage: `url(${props.imageUrl})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
    }}>
      {props.text}
    </div>
  );
}

class About extends React.Component {
  render() {
    return (
      <div>
          
      </div>
    )
  }
}

export default Radium(About);

// <div style={{
//           width: '100%',
//           height: '60vh'
//         }}>
//           <div style={{
//             backgroundImage: `url(${FOR_3})`,
//             backgroundPosition: 'center center',
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover',
//             width: '100%',
//             height: '100%',
//           }}>
//         </div>
//       </div> 
import React from 'react';
import Radium from 'radium';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const SwipeableViewsAutoPlay = autoPlay(SwipeableViews); // SwipeableViews;

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
      <span style={{color: 'white'}}>  
        {props.text}
      </span>  
    </div>
  );
}

class Carousel extends React.Component {
  render() {
    return (
      <SwipeableViewsAutoPlay
        interval={50000}
        enableMouseEvents={true}
        style={{width: '100%'}}
        slideStyle={{ height: '60vh' }}
        containerStyle={{  }}>
          <Slide imageUrl={FOR_3}  text={'Slide 1'} />
          <Slide imageUrl={FOR_2}  text={'Slide 2'} />
          <Slide imageUrl={FOR_1}  text={text_3} />
      </SwipeableViewsAutoPlay>
    )
  }
}

export default Radium(Carousel);


let text_3 = 'We love our Icelandic horses and enjoy to introduce them to others.  This friendly, smart, cooperative, powerful, free spirit and lovable horses.';
import React from 'react';
import Radium from 'radium';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const SwipeableViewsAutoPlay = autoPlay(SwipeableViews);

import { FOR_1, FOR_2, FOR_3 } from '/imports/ui/variables/paths/Images.js';

import Pagination from './Carousel/Pagination.jsx';

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
    </div>
  );
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);;

    this.state = {
      index: 0,
    };
  }

  handleChangeIndex (index) {
    this.setState({
      index,
    });
  };

  render() {
    let { index } = this.state;
    return (
      <div style={{ position: 'relative' }} >
        <SwipeableViewsAutoPlay
          index={index}
          onChangeIndex={this.handleChangeIndex}
          interval={4000}
          enableMouseEvents={true}

          style={{width: '100%'}}
          slideStyle={{ height: '60vh' }}
          containerStyle={{  }}>
            <Slide imageUrl={FOR_3} />
            <Slide imageUrl={FOR_2} />
            <Slide imageUrl={FOR_1} />
        </SwipeableViewsAutoPlay>

        <Pagination
          dots={3}
          index={index}
          onChangeIndex={this.handleChangeIndex}
        />
      </div>
    )
  }
}

export default Radium(Carousel);

let text_3 = 'We love our Icelandic horses and enjoy to introduce them to others.  This friendly, smart, cooperative, powerful, free spirit and lovable horses.';
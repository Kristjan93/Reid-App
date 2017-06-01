import React from 'react';
import Radium from 'radium'

import TourItem from './TourItem.jsx';

const styles = {
  TourList: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0',
    padding: '0',
  },
};

const TourList = ({ style, itemStyle, tours, ...rest }) => {
  return (
    <div style={[styles.TourList, style]} >
      <For each="item" index="index" of={tours}>
        <TourItem
          key={index}
          style={itemStyle}

          id={item.id}
          title={item.title}
          price={item.price}
          imageSrc={item.imageSrc}
          carouselImagesSrc={item.carouselImagesSrc}
          imageSrc={item.imageSrc}
          text={item.text}

          duration={item.info.duration.text}
          departures={item.info.departures.text} />
      </For>
    </div>
  );
}

export default Radium(TourList);

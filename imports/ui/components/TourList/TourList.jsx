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
          id={item.id}
          title={item.title}
          imageSrc={item.imageSrc}
          price={item.price}
          duration={item.duration}
          text={item.text}
          style={itemStyle}/>
      </For>
    </div>
  );
}

export default Radium(TourList);

import React from 'react';
import Radium from 'radium';

import PointInfoItem from './PointInfoItem.jsx';

const styles = {

};

const PointInfoList = ({ route, info: { duration, departures, groupSize, included } }) => {
  let infoArray = [ duration, departures, groupSize, included ];
  return (
    <div>
      {infoArray.map( (item, index) => {
        return (
          <PointInfoItem
            key={index}
            type={item.type}
            title={item.title}
            text={item.text}
            nestedText={item.nestedText} />
        )
      })}
    </div>
  )
}

export default Radium(PointInfoList);


import React from 'react';
import Radium from 'radium';

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

export default Radium(Slide);
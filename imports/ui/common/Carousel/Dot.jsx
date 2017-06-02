import React from 'react';
import Radium from 'radium';

import DotSvg from 'material-ui/svg-icons/av/fiber-manual-record';


const Dot = ({ index, isActive, onClick }) => {

  handleClick = (event) => {
    onClick(event, index);
  };  

  return (
    <DotSvg 
      onClick={handleClick}
      style={{ color: isActive ? 'rgb(0, 188, 212)' : 'white'}} 
    />
  );
}

// class Dot extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(event) {
//     this.props.onClick(event, this.props.index);
//   };

//   render() {
//     let { index, isActive} = this.props;
//     return (
//       <DotSvg 
//         onClick={this.handleClick}
//         style={{ color: isActive ? 'rgb(0, 188, 212)' : 'white'}} 
//       />
//     );
//   }
// };

export default Radium(Dot);
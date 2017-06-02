import React from 'react';
import Radium from 'radium';

import Dot from './Dot.jsx';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, index) {
    this.props.onChangeIndex(index)
  }

  render() {
    let { index, dots } = this.props;
    
    let children = [];
    for(i = 0; i < dots; i++) {
      children.push(
        <Dot
        key={i}
        index={i}
        isActive={i === index}
        onClick={this.handleClick} />
      );
    };

    return (
      <div style={{ 
        position: 'absolute',
        bottom: '8px',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
      }}>
        <span>
          {children}
        </span>
      </div>
    );
  }
};

export default Radium(Pagination);
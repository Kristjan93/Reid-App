import React from 'react';
import Radium from 'radium'

const styles = {
  base: {
    padding: '23px',
  },
};

class Container extends React.Component {
  render() {
    return (
      <div style={ [styles.base, this.props.style]} className="container" >
        {this.props.children}
      </div>
    );
  }
}

export default Radium(Container);

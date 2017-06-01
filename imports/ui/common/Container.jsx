import React from 'react';
import Radium from 'radium'

const styles = {
  width: '100%',
  maxWidth: '980px',
  margin: '0 auto',
  padding: '1rem',
};

class Container extends React.Component {
  render() {
    return (
      <div style={ [styles, this.props.style]}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(Container);

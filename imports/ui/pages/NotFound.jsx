import React from 'react';
import Radium from 'radium';

import Paper from 'material-ui/Paper';

const styles = {
  base: {
    color: 'red',
  },
};

class NotFound extends React.Component {
  render() {
    return (
      <Paper zDepth={2}>
        <h1 style={styles.base} >404 Not Found</h1>
      </Paper>
    );
  }
}

export default Radium(NotFound);
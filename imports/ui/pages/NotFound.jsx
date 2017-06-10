import React from 'react';
import Radium from 'radium';

import Paper from 'material-ui/Paper';

const styles = {
  base: {
    color: 'red',
  },
};

const NotFound = (props) => {
  return (
    <Paper zDepth={1}>
      <h1 style={styles.base} >404 Not Found</h1>
    </Paper>
  );
}

export default Radium(NotFound);
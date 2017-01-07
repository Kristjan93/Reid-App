import React from 'react';
import Radium from 'radium';

import Container from '../components/Container.jsx';
import Paper from 'material-ui/Paper';

const styles = {
  base: {
  },
};

class LongTours extends React.Component {
  render() {
    return (
      <Paper zDepth={2}>
        <h1>Long Tours</h1>
      </Paper>
    );
  }
}

export default Radium(LongTours);
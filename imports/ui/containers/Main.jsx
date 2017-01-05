import React from 'react';
import Radium from 'radium'

import Container from '../components/Container.jsx';
import Paper from 'material-ui/Paper';

const styles = {
  base: {
    main: {
      flex: '1',
      background: '#edeff0',
    },
    div: {
      padding: '23px',
    },
    Paper: {
    },
  },
};

class Main extends React.Component {
  render() {
    return (
      <main style={styles.base.main} >
        <Paper zDepth={2}>
          {this.props.children}
        </Paper>
      </main>
    );
  }
}

// <Paper style={styles.base.Paper} zDepth={1}>
//   {this.props.children}
// </Paper>

export default Radium(Main);

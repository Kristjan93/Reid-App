import React from 'react';
import Radium from 'radium'

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
      //   <main style={styles.base.main} >
      //     {this.props.children}
      // </main>
  render() {
    return (
      <div>Hello</div>
    );
  }
}
//bla
export default Radium(Main);

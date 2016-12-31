import React from 'react';
import Radium from 'radium'
import componentQueries from 'react-component-queries';

import { setBreakpoints } from './constants/breakpoints.js'

import Header from './containers/Header.jsx'
import Footer from './containers/Footer.jsx'

import FlatButton from 'material-ui/FlatButton';

const styles = {
  site: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },

  main: {
    flex: '1',
  },

  footer: {
    padding: '20px',
    background: '#42A5F5',
    color: 'white',
  },
}

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.site} >
        <Header>
        </Header>

        <main style={styles.main}>
          {this.props.breakpoint}
          {this.props.children}
          <FlatButton label="hahah" />
        </main>

        <Footer style={styles.footer}>
        </Footer>
      </div>
    );
  }
}

/* 
 * Based on the predefined breakpoints 'componentQueries'
 * enables the component 'Layout' to pass down breakpoints as props.
 */
export default componentQueries(
  ({ width }) => { return setBreakpoints(width) }
)( Radium(Layout));
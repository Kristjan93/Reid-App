import React from 'react';
import Radium from 'radium'
import componentQueries from 'react-component-queries';

import { setBreakpoints } from './constants/breakpoints.js'

import Header from './containers/Header.jsx';
import Main from './containers/Main.jsx';
import Footer from './containers/Footer.jsx';
import Home from './pages/Home.jsx';

import FlatButton from 'material-ui/FlatButton';

const styles = {
  site: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },

  main: {
    flex: '1',
    //minHeight: '400px',
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
        <Header
          breakpoint={this.props.breakpoint}>
        </Header>

        <Main
          children={this.props.children}
          style={styles.main}
          breakpoint={this.props.breakpoint}>
        </Main>

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
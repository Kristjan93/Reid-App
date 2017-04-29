import React from 'react';
import Radium from 'radium'

import Header from './components/Layout/Header.jsx';
import Main from './components/Layout/Main.jsx';
import Footer from './components/Layout/Footer.jsx';

const styles = {
  Layout: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    paddingTop: '64px',
  },
  main: {
    display: 'flex',
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
      <div style={ styles.Layout }>
        <Header />

        <main style={styles.main}>
          {this.props.children}
        </main>

        
        <Footer style={styles.footer}>
        </Footer>
      </div>
    );
  }
}


export default Radium(Layout);
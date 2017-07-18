import React from 'react';
import Radium from 'radium'

import Header from '/imports/ui/Layout/Header.jsx'
import Footer from '/imports/ui/Layout/Footer.jsx'

const styles = {
  Layout: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    paddingTop: '64px',
  },
  main: {
    display: 'flex',
    flex: '1 0 auto',
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
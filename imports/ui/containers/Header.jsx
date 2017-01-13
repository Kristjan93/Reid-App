import React from 'react';
import Radium from 'radium'

import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import HeaderNavList from '../components/HeaderNavList.jsx';
import Container from '../components/Container.jsx';

const styles = {
  base: {
    AppBar: {
      padding: 0,
    },
    Container: {
      width: '100%',
      padding: 0,
    },
    dropDownMenuIco: {
      color: 'inherit',
      marginLeft: '10px',
    },
  },
};

class Header extends React.Component {

  render() {
    return (
      <header>
        <AppBar
          title={null}
          titleStyle={ {display: 'none'} }
          style={styles.base.AppBar}
          iconElementLeft={null}
          iconElementRight={null}
          showMenuIconButton={false} >

          <Container style={styles.base.Container}>
            <HeaderNavList />
          </Container>

        </AppBar>
      </header>
    );
  }
}

export default Radium(Header);
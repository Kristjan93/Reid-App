import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router'; let _Link = Radium(Link);

import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import LocationOn from 'material-ui/svg-icons/communication/location-on';
import MenuIco from 'material-ui/svg-icons/navigation/menu';

import HeaderNavMenu from './Header/HeaderNavMenu.jsx';
import SideBar from './Header/SideBar.jsx';
import { Mobile, Tablet, Desktop } from '../Breakpoints.jsx';

import SvgIcon from 'material-ui/SvgIcon';

const FacebookBoxIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
  </SvgIcon>
);

const FacebookIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
  </SvgIcon>
);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onRequestChange = this.onRequestChange.bind(this);

    this.state = { drawerOpen: false };
  }

  handleToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  handleClose() {
    this.setState({drawerOpen: false});
  }

  onRequestChange(drawerOpen) {
    this.setState({ drawerOpen });
  }

  render() {
    return (
      <header>
          <AppBar style={ styles.AppBar } titleStyle={{ display: 'none' }}
            title={null}
            iconElementLeft={null}
            iconElementRight={null}
            showMenuIconButton={false}>

              <div style={{ marginRight: '26px' }}>
                <IconButton
                  style={{width: 72, height: 64, padding: 0}}
                  iconStyle={{ width: 26, height: 26 }}
                  onTouchTap={this.handleToggle}>
                  <MenuIco />
                </IconButton>
              </div>

              <div style={{ flex: '1' }}>
                <HeaderNavMenu />
              </div>

              <div>
                <IconButton 
                  style={{width: 72, height: 64, padding: 0, textAlign: 'center'}}
                  iconStyle={{ width: 26, height: 64, }}
                  href='https://www.facebook.com/Geysirhorses/'>
                  <FacebookIcon />
                </IconButton>
              </div>
          </AppBar>

          <SideBar
            drawerOpen={this.state.drawerOpen}
            onRequestChange={this.onRequestChange}
            handleToggle={this.handleToggle}
            handleClose={this.handleClose}/>
      </header>
    );
  }
}

const styles = {
  AppBar: {
    top: 0,
    padding: 0,
    position: 'fixed',
  },
};

export default Radium(Header);
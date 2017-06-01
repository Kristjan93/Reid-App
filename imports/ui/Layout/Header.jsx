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


import FacebookBoxIcon from '/imports/ui/common/customSvg/FacebookBoxIcon.jsx';
import FacebookIcon from '/imports/ui/common/customSvg/FacebookIcon.jsx';

import HeaderNavMenu from './Header/HeaderNavMenu.jsx';
import SideBar from './Header/SideBar.jsx';

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
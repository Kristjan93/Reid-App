import React from 'react';
import Radium from 'radium'

import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
let RadiumLink = Radium(Link);
import HeaderNavList from '../components/HeaderNavList.jsx';
import Container from '../components/Container.jsx';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import { List, ListItem } from 'material-ui/List';
import ActionHome from 'material-ui/svg-icons/action/home';
import ToggleStar from 'material-ui/svg-icons/toggle/star';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';

const styles = {
  base: {
    AppBar: {
      padding: 0,
    },
    Container: {
      width: '100%',
      padding: '0 23px',
    },
    dropDownMenuIco: {
      color: 'inherit',
      marginLeft: '10px',
    },
    ListLink: {
      textDecoration: 'none',
    }
  },
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  handleClose() {
    this.setState({drawerOpen: false});
  } 

  render() {
    return (
      <header>
        {this.props.breakpoint === 'desktop' ? (
          <AppBar
            key="desktopAppBar"
            title={null}
            titleStyle={{ display: 'none' }}
            style={styles.base.AppBar}
            iconElementLeft={null}
            iconElementRight={null}
            showMenuIconButton={false}>
            <Container style={styles.base.Container}>
              <HeaderNavList />
            </Container>
          </AppBar>
        ) : (
            <div>
              <AppBar
                key="mobileAppBar"
                title={<RadiumLink to="/"><img style={{ height: '50px', flex: '0 1 auto', alignSelf: 'center' }} src="/images/LogoMakr.png" /></RadiumLink>}
                showMenuIconButton={false}
                iconElementRight={<IconButton><NavigationMenu /></IconButton>}
                onRightIconButtonTouchTap={this.handleToggle} >
              </AppBar>
              <Drawer
                docked={false}
                open={this.state.drawerOpen}
                onRequestChange={(drawerOpen) => this.setState({ drawerOpen })}>
                
                <List>
                  <ListItem 
                  containerElement={<Link to='/' />}
                  primaryText="Home"
                  onTouchTap={this.handleClose}
                  leftIcon={<ActionHome />} />

                  <ListItem
                    primaryText="Tours"
                    leftIcon={<ToggleStar />}
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                      <ListItem
                        key={1}
                        containerElement={<Link to='short-tours' />}
                        primaryText="Short Tours" 
                        onTouchTap={this.handleClose} />,
                      <ListItem
                        key={2}
                        containerElement={<Link to='long-tours' />}
                        primaryText="Long Tours" 
                        onTouchTap={this.handleClose} />,
                    ]}
                    />
                </List>
              </Drawer>
            </div>
          )}
      </header>
    );
  }
}

export default Radium(Header);

          // <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          // <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
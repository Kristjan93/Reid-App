import React from 'react';
import Radium from 'radium'
import { Link } from 'react-router'; let _Link = Radium(Link);

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import navMenuItems from '/imports/ui/constants/navMenuItems.js';

const SideBar = ({ drawerOpen, onRequestChange, handleClose, ...rest }) => {
  return (
    <Drawer
      docked={false}
      open={drawerOpen}
      onRequestChange={onRequestChange}>

      {navMenuItems.map((item, index) => {
        return (
          <MenuItem
            key={index}
            primaryText={item.text}
            containerElement={<Link style={{textDecoration: 'none'}} to={item.href}/>}
            onTouchTap={handleClose}>
          </MenuItem>
        );
      })}
    </Drawer>
  );
}

const styles = {
};

export default Radium(SideBar);
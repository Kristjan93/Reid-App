import React from 'react';
import Radium from 'radium'
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const SideBar = ({ drawerOpen, onRequestChange, handleClose, ...rest }) => {
  const menuItems = ['Home', 'Tours', 'Gallery', 'Contact'];
  return (
    <Drawer
      docked={false}
      open={drawerOpen}
      onRequestChange={onRequestChange}>

      {menuItems.map((item, index) => {
        return (
          <MenuItem key={index} onTouchTap={handleClose}>
            {item}
          </MenuItem>
        );
      })}
    </Drawer>
  );
}

const styles = {
};

export default Radium(SideBar);
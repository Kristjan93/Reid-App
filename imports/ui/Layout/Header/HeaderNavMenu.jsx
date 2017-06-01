import React from 'react';
import Radium from 'radium'
import { Link } from 'react-router'; let _Link = Radium(Link);

import navMenuItems from '/imports/ui/constants/navMenuItems.js'

const HeaderNavMenu = (props) => {
  return (
    <nav>
      <ul key='ul' style={styles.ul}>
        {navMenuItems.map((item, index) => {
          return (
            <li key={index} style={styles.li}>
              <_Link key={index} style={styles.a} to={item.href}>
                <span style={styles.span}>
                  {item.text}
              </span>
              </_Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const styles = {
  ul: {
    paddingLeft: 0,
    listStyleType: 'none', 
    margin: 0,
  },
  li: {
    listStyleType: 'none',
    float: 'left',
    padding: 0,
  },
  a: {
    position: 'relative',
    cursor: 'pointer',
    height: '100%',
    display: 'inline-block',
    WebkitTransition: 'background-color .3s',
    transition: "background-color .3s",
    textDecoration: 'none',
    ':hover': {
      background: 'rgba(0,0,0,.2)'
    }
  },
  span: {
    fontWeight: "400",
    padding: "0 15px",
    color: "#fff",
    fontSize: "20px",
    lineHeight: "64px"
  },
};

export default Radium(HeaderNavMenu);
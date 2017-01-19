import React from 'react';
import Radium from 'radium'

import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
import HeaderNavListItem from './HeaderNavListItem.jsx';

const styles = {
  base: {
    ul: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      listStyle: 'none',
      margin: '0',
      padding: '0',
    },
    img: {
      height: '58px',
      width: 'auto',
    },
    FontIcon: {
      color: 'inherit'
    },
  },
};

const headerNavItems = [
  {
    to: "/",
    rootStyle: { margin: '0 auto 0 0' },
    linkStyle: { 'padding': '0rem', margin: '0 20px' },
    title: (<img style={styles.base.img} src="/images/LogoMakr.png" />),
  },
  {
    to: "/",
    title: "Home",
  },
  {
    to: "",
    title: "Tours",
    dropdown: [
      { to: 'short-tours', text: 'Short tours' },
      { to: 'long-tours', text: 'Long tours' },
    ],
  },
  {
    to: "information",
    title: "Information",
  },
  {
    to: "contact",
    title: "Contact",
  },
  {
    to: "#",
    title: (<FontIcon style={styles.base.FontIcon} className="fa fa-facebook" />)
  }
];

class HeaderNavList extends React.Component {
  renderHeaderNavListItem(item, index) {
    return (
      <HeaderNavListItem
        key={index}
        rootStyle={item.rootStyle}
        linkStyle={item.linkStyle}
        to={item.to}
        title={item.title}
        dropdown={item.dropdown} />
    );
  }

  render() {
    return (
      <nav className="headerNavMenu" role="navigation">
        <ul style={styles.base.ul}>
        {headerNavItems.map(this.renderHeaderNavListItem)}
        </ul>
      </nav>
    );
  }
}

export default Radium(HeaderNavList);
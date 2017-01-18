import React from 'react';
import Radium from 'radium'

import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
let RadiumLink = Radium(Link);


const styles = {
  base: {
    li: {
      flex: '0 1 auto',
      margin: 0,
      padding: 0,
      position: 'relative',
      transition: 'all linear 0.1s',
      ':hover': {
        background: '#9E9E9E',
      },
    },
    RadiumLink: {
      alignItems: 'flex-start',
      color: '#fff',
      display: 'flex',
      fontSize: '1.55rem',
      fontWeight: '200',
      letterSpacing: '1px',
      maxWidth: ' 200px',
      padding: '1rem 1.5rem',
      textDecoration: 'none',
      textShadow: '0 1px 1px rgba(0,0,0,.1)',
      transition: 'all linear 0.1s',
    },
    dropdownDiv: {
      display: 'none',
      background: '#BDBDBD',
      borderRadius: '0 0 2px 2px',
      boxShadow: '0 3px 1px rgba(0, 0, 0, .05)',
      fontSize: '1rem',
      position: 'absolute',
      width: '195px',
    },
    dropdownUl: {
      padding: 0,
      listStyleType: 'none',
    },
    dropdownLi: {
      margin: 0,
      padding: 0,
      lineHeight: '30px',
      ':hover': {
        backgroundColor: 'rgba(0,0,0,.15)',
      },
    },
    dropdownRadiumLink: {
      color: 'rgba(255, 255, 255, .9)',
      display: 'block',
      fontSize: ' .75rem',
      letterSpacing: ' 1.5px',
      padding: ' .25rem 1.5rem',
      textDecoration: 'none',
      textTransform: 'uppercase',
    },
    FontIcon: {
      color: 'inherit',
      marginLeft: '10px',
    },
  },
};

class HeaderNavListItem extends React.Component {
  renderDropdownItem(item, index) {
    return (
      <li key={index} style={styles.base.dropdownLi}>
        <RadiumLink to={item.to} style={styles.base.dropdownRadiumLink}>
          {item.text}
        </RadiumLink>
      </li>
    );
  }

  render() {
    return (
      <li key="navLink" style={styles.base.li}>
        <RadiumLink style={styles.base.RadiumLink} to={this.props.to}>
          <div style={styles.base.div}>
            {this.props.title}

            {this.props.dropdown &&
              <FontIcon
                style={styles.base.FontIcon}
                className="fa fa-caret-down" />}

          </div>
        </RadiumLink>

        {this.props.dropdown &&
          (<div style={[styles.base.dropdownDiv, Radium.getState(this.state, 'navLink', ':hover') && { display: 'block' }]}>
            <ul style={styles.base.dropdownUl} >
              {this.props.dropdown.map((this.renderDropdownItem))}
            </ul>
          </div>)}

      </li>
    );
  }
}

export default Radium(HeaderNavListItem);
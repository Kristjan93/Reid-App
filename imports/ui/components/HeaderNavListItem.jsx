import React from 'react';
import Radium from 'radium'

import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';


const styles = {
  base: {
    li: {
      flex: '0 1 auto',
      margin: 0,
      padding: 0,
      position: 'relative',
      transition: 'all linear 0.1s',
      ':hover': {
        background: '#8b74aa',
      },
    },
    Link: {
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
    div: {
      // background: 'linear-gradient(to bottom, rgba(58, 162, 173, 1) 0, rgba(62, 188, 207, 0.96) 100%)',
      // borderRadius: '0 0 2px 2px',
      // boxShadow: '0 3px 1px rgba(0, 0, 0, .05)',
      // display: 'none',
      // fontSize: '1rem',
      // position: 'absolute',
      // width: '195px',
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
      <li key={index}>
        <Link to={item.to}>{item.text}</Link>
      </li>
    );
  }

  render() {
    return (
      <li style={styles.base.li}>
        <Link style={styles.base.Link} to={this.props.to}>
          <div style={styles.base.div}>
            {this.props.title}

            {this.props.dropdown &&
              <FontIcon
                style={styles.base.FontIcon}
                className="fa fa-caret-down" />}

          </div>
        </Link>

        {this.props.dropdown && 
          <div>
            <ul>
              {this.props.dropdown.map((this.renderDropdownItem))}
            </ul>
          </div>}

      </li>
    );
  }
}

export default Radium(HeaderNavListItem);
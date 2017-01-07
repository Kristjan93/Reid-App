import React from 'react';

import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';

const styles = {
  base: {
    dropDownMenuIco: {
      color: 'inherit',
      marginLeft: '10px',
    },
  },
};

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <AppBar
          title="Geysir Hestar"
          showMenuIconButton={false} >
          <nav role="navigation">
            <ul>
              <li>
                <Link to="/">
                  <div>
                    Home
                  <span>there's no place like it</span>
                  </div>
                </Link>
              </li>
              <li>
                <a href="#">
                  <div>
                    Tours
                    <FontIcon 
                      style={styles.base.dropDownMenuIco} 
                      className="fa fa-caret-down" />
                  <span>come ride with us</span>
                  </div>
                </a>
                <div>
                  <ul>
                    <li><Link to="short-tours">Short tours</Link></li>
                    <li><Link to="long-tours">Long tours</Link></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="/contact">
                  <div>
                    Contact
                  <span>drop me a line</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/forum">
                  <div>
                    Forum
                  <span>chat with others</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </AppBar>
      </header>
    );
  }
}
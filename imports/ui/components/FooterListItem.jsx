import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import Radium from 'radium'
import Divider from 'material-ui/Divider';

const styles = {
  base: {

  },
}

class FooterListItem extends React.Component {
  render() {
    return (
        <dl style={styles.footer.dl_default}>
          <dt style={styles.footer.dt_default}>
            <a href='/'>
              <CompanyLogoImage style={ {width: '105px'} } />
            </a>
          </dt>
          <dd style={styles.footer.dd_default}>
            General information concerning what the company is all about.
          </dd>
        </dl>
    );
  }
}

export default Radium(FooterListItem);
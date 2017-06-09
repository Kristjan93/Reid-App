import React from 'react';
import Radium from 'radium'

import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';

import { LinkTypes } from '/imports/ui/variables/linkTypes.js';

import CompanyLogoImage from '/imports/ui/common/CompanyLogoImage.jsx';
import Container from '/imports/ui/common/Container.jsx';

import FooterDefinitionList from './Footer/FooterDefinitionList.jsx';

const styles = {
  base: {
    footer: {
      background: '#edeff0',
      color: '#8d9aa5',
    },
    companyLogoImage: {
      width: '105px',
    },
    Container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '26px',

      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between',
    }
  }
};

const definitionLists = [
  {
    title: (<a href='/'><CompanyLogoImage style={styles.base.companyLogoImage} /></a>),
    definitionDescriptions: [
      {
        type: LinkTypes.BRAND,
        text: 'General information concerning what the company is all about.',
      }
    ],
  },
  {
    title: 'Contact',
    definitionDescriptions: [
      {
        type: LinkTypes.EMAIL,
        text: 'myrkholt@gmail.com',
        href: "mailto:krillinn@gmail.com",
      },
      {
        type: LinkTypes.PHONE,
        text: 'Tel: +354 774-1149',
        href: "tel:+6494452687",
      }
    ],
  },
  {
    title: 'Address',
    definitionDescriptions: [
      {
        type: LinkTypes.LOCATION,
        text: 'Myrkholt',
        href: 'https://goo.gl/maps/PArPqp6aQJ22',
      },
    ],
  },
];

class Footer extends React.Component {
  renderDefinitionList({title, definitionDescriptions}, index) {
    return (
      <FooterDefinitionList
        key={index}
        title={title}
        definitionDescriptions={definitionDescriptions} />
    );
  }

  render() {
    return (
      <footer style={styles.base.footer}>
        <div style={styles.base.Container} >
            {definitionLists.map(this.renderDefinitionList)}
        </div>
      </footer>
    );
  }
}

export default Radium(Footer);
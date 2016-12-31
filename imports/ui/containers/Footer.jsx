import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import Radium from 'radium'

import Divider from 'material-ui/Divider';
import CompanyLogoImage from '../components/CompanyLogoImage.jsx';
import DefinitionList from '../components/DefinitionList.jsx'

import { DD_LINKS_TYPE } from '../constants/enums.js'

const styles = {
  base: {
    footer: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between',
      minHeight: '50px',
      paddingLeft: '24px',
      paddingRight: '24px',
      backgroundColor: '#42A5F5',
      color: 'white',
    },

    companyLogoImage: {
      width: '105px',
    },
  }
};

const definitionList = [
  {
    title: (<a href='/'><CompanyLogoImage style={styles.base.companyLogoImage} /></a>),
    definitionDescriptions: [
      {
        type: DD_LINKS_TYPE.TEXT,
        text: 'General information concerning what the company is all about.',
      }
    ],
  },
  {
    title: 'Contact',
    definitionDescriptions: [
      {
        type: DD_LINKS_TYPE.EMAIL,
        text: 'myrkholt@gmail.com',
        href: "mailto:krillinn@gmail.com",
      },
      {
        type: DD_LINKS_TYPE.PHONE,
        text: 'Tel: +354 774-1149',
        href: "tel:+6494452687",
      }
    ],
  },
  {
    title: 'Address',
    definitionDescriptions: [
      {
        type: DD_LINKS_TYPE.LOCATION,
        text: 'Myrkholt',
        href: 'https://goo.gl/maps/srr6BJtvbDU2',
      },
    ],
  },
];

class Footer extends React.Component {
  render() {
    const dlItems = definitionList.map((item, index) => {
      return (
        <DefinitionList
          key={index}
          title={item.title}
          definitionDescriptions={item.definitionDescriptions} />
      );
    });
    return (
      <footer style={styles.base.footer}>
        {dlItems}
      </footer>
    );
  }
}

export default Radium(Footer);
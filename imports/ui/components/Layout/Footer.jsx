import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import Radium from 'radium'

import Divider from 'material-ui/Divider';
import CompanyLogoImage from '../CompanyLogoImage.jsx';
import FooterDefinitionList from '../FooterDefinitionList.jsx'
import Container from '../Container.jsx';

import { DD_LINKS_TYPE } from '../../constants/enums.js'

const styles = {
  base: {
    footer: {
      //display: 'flex',
      background: '#edeff0',
      color: '#8d9aa5',
      minHeight: '50px',
    },
    companyLogoImage: {
      width: '105px',
    },
    Container: {
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
        type: DD_LINKS_TYPE.BRAND,
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
        <Container style={styles.base.Container} >
            <Divider style={ {width: '100%'} } />
            {definitionLists.map(this.renderDefinitionList)}
        </Container>
      </footer>
    );
  }
}

export default Radium(Footer);
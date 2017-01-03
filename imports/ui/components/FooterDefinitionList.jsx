import React from 'react';
import Radium from 'radium'

import DefinitionDescriptionLink from './DefinitionDescriptionLink.jsx';
import DefinitionDescriptionBrand from './DefinitionDescriptionBrand.jsx';

import { DD_LINKS_TYPE } from '../constants/enums.js'

const styles = {
  base: {
    dl: {
      width: '220px',
    },

    dt: {
      color: '#8d9aa5',
      fontSize: '1.2rem',
      fontWeight: 500,
      lineHeight: '38px',
    },
  },
};

class FooterDefinitionList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDefinition(item, index) {
    if (item.type !== DD_LINKS_TYPE.BRAND) {
      return (
        <DefinitionDescriptionLink
          key={index}
          type={item.type}
          text={item.text}
          href={item.href} />
      );
    }
    else {
      return (
        <DefinitionDescriptionBrand
          key={index}
          text={item.text} />
      );
    }
  }

  render() {
    return (
      <dl style={styles.base.dl}>
        <dt style={styles.base.dt}>
          {this.props.title}
        </dt>
        {this.props.definitionDescriptions.map(this.renderDefinition)}
      </dl>
    );
  }
}

export default Radium(FooterDefinitionList);
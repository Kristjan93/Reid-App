import React from 'react';
import Radium from 'radium'

import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

import { DD_LINKS_TYPE } from '../constants/enums.js'

const styles = {
  base: {
    dd: {
      margin: 0,
      padding: 0,
      border: 0
    },

    a: {
      // cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit',
    },

    fontIcon: {
      fontSize: '0.9rem',
      paddingRight: '5px',
      color: 'blue',
    }
  },
};

class DefinitionDescriptionLink extends React.Component {
  render() {
    let linkIconClass;
    switch (this.props.type) {
      case DD_LINKS_TYPE.EMAIL:
        linkIconClass = 'fa fa-envelope';
        break;

      case DD_LINKS_TYPE.PHONE:
        linkIconClass = 'fa fa-phone';
        break;

      case DD_LINKS_TYPE.LOCATION:
        linkIconClass = 'fa fa-map-marker';
        break;

      default:
        linkIconClass = '';
        break;
    }

    return (
      <FlatButton
        
        target="_blank"
        label={this.props.text}
        icon={<FontIcon className={linkIconClass} />} />
    );
  }
}

export default Radium(DefinitionDescriptionLink);

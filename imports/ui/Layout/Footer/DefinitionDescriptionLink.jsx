import React from 'react';
import Radium from 'radium'

import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

import { LinkTypes } from '/imports/ui/variables/linkTypes.js';

const styles = {
  base: {
    dd: {
      margin: 0,
      padding: 0,
      border: 0
    },
    FlatButton: {
      userSelect: 'auto',
      labelStyle: {
        textTransform: 'none',
        color: '#8d9aa5',
      },
      FontIcon: {
        marginLeft: 0,
        color: '#8d9aa5',
      },
    },
  },
};

class DefinitionDescriptionLink extends React.Component {
  render() {
    let linkIconClass;
    switch (this.props.type) {
      case LinkTypes.EMAIL:
        linkIconClass = 'fa fa-envelope';
        break;

      case LinkTypes.PHONE:
        linkIconClass = 'fa fa-phone';
        break;

      case LinkTypes.LOCATION:
        linkIconClass = 'fa fa-map-marker';
        break;

      default:
        linkIconClass = '';
        break;
    }

    return (
      <dd style={styles.base.dd} >
        <FlatButton
          style={styles.base.FlatButton}
          href={this.props.href}
          target="_blank"
          label={this.props.text}
          labelStyle={styles.base.FlatButton.labelStyle}
          icon={<FontIcon style={styles.base.FlatButton.FontIcon} className={linkIconClass} />} />
      </dd>
    );
  }
}

export default Radium(DefinitionDescriptionLink);

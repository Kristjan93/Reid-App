import React from 'react';
import Radium from 'radium'

import { DD_LINKS_TYPE } from '../constants/enums.js'

const styles = {
  base: {
    dd: {
      margin: 0,
      padding: 0,
      border: 0
    },
  },
};

class DefinitionDescriptionBrand extends React.Component {
  render() {
    return (
      <dd style={styles.base.dd} >
        {this.props.text}
      </dd>
    );
  }
}

export default Radium(DefinitionDescriptionBrand);

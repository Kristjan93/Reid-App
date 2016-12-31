import React from 'react';
import Radium from 'radium'

import DefinitionDescriptionLink from './DefinitionDescriptionLink.jsx';

import { DD_LINKS_TYPE } from '../constants/enums.js'

const styles = {
  base: {
    dl: {
      width: '20%',
    },

    dt: {
      fontSize: '1.2rem',
      fontWeight: 500,
      lineHeight: '38px',
    },

    dd: {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: '0.9rem',
      link: {
        lineHeight: '35px',
      },
    },
  },
}

class DefinitionList extends React.Component {
  render() {
    const ddItems = this.props.definitionDescriptions.map((item, index) => {
      let isText = item.type !== DD_LINKS_TYPE.TEXT;
      return (
        <dd
          key={index}
          style={ [styles.base.dd, isText && styles.base.dd.link] }>
          {item.type !== DD_LINKS_TYPE.TEXT ? (
            <DefinitionDescriptionLink
              type={item.type}
              text={item.text}
              href={item.href} >
              </DefinitionDescriptionLink>
          ) : (
            <span>{item.text}</span>
          )}
        </dd>
      );
    });
    return (
      <dl style={styles.base.dl}>
        <dt style={styles.base.dt}>
          {this.props.title}
        </dt>
        {ddItems}
      </dl>
    );
  }
}

export default Radium(DefinitionList);
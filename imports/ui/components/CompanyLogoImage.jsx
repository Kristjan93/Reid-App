import React from 'react';
import Radium from 'radium'

import { COMPANY_LOGO } from '../constants/srcPictures.js'

const styles = {
  base: {
    width: '50px',
    transition: 'opacity 300ms',
    ':hover': {
      opacity: '0.6',
    },
  },
};

class CompanyLogoImage extends React.Component {
  render() {
    return (
      <img
        src={COMPANY_LOGO}
        alt="Company Logo: Name and a horse picture"
        style={ [styles.base, this.props.style] } 
      />
    );
  }
}

export default  Radium(CompanyLogoImage);
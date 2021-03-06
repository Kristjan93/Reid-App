import React from 'react';
import Radium from 'radium'

import { COMPANY_LOGO } from '/imports/ui/variables/paths/Images.js';

const styles = {
  base: {
    width: '50px',
    opacity: '0.6',
    transition: 'opacity 300ms',
    ':hover': {
      opacity: '1',
    },
  },
};

const CompanyLogoImage = (props) => {
  return (
    <img
      src={COMPANY_LOGO}
      alt="Company Logo: Name and a horse picture"
      style={ [styles.base, props.style] }
    />
  );
}

export default  Radium(CompanyLogoImage);
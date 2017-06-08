import React from 'react';
import Radium from 'radium';

import Divider from 'material-ui/Divider';

import { mediaBreakpoints } from '/imports/ui/variables/breakpoints.js';

const styles = {
  root: {
    maxWidth: '1400px',
    margin: '26px auto',
    padding: '26px 26px',
  },
  textContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textSection: {
    width: '100%',
    padding: '0px 0',
    [mediaBreakpoints.min.tablet]: {
        width: '50%',
    },
  },
  title: {
    fontWeight: '600',
    marginBottom: '15px',
    //marginTop: '0px',
    maxWidth: '650px',
  },
}

const GoodToKnowInfo = (props) => {
  return (
    <div style={ styles.root } >
      <Divider />

      <div 
      key={1}
      style={ styles.textContainer }>
        <div style={ styles.textSection } >
          <h2 style={ styles.title }>Good to know</h2>
          <p>
            Some text...
          </p>
        </div>

        <div
        key={2}
        style={ styles.textSection } >
          <h2 style={ styles.title }>Something else</h2>
          <p>
            Some text...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Radium(GoodToKnowInfo);
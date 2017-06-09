import React from 'react';
import Radium from 'radium';

import { Card, CardMedia } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import { breakpoints, mediaBreakpoints } from '/imports/ui/variables/breakpoints.js';
import { HOUR_1 } from '/imports/ui/variables/paths/Images.js';


styles = {
  root: {
    maxWidth: '1400px',
    margin: '26px auto',
    paddingBottom: '26px',
  },

  articleTitle: {
    fontWeight: '600',
    marginBottom: '15px',
    marginTop: '0px',
    maxWidth: '650px',
  },
  section: {
    width: '100%',
    padding: '0 26px',
    [mediaBreakpoints.min.tablet]: {
        width: '50%',
    },
  },
  imageSection: {
    width: '100%',
    padding: '0 1rem',
    [mediaBreakpoints.min.tablet]: {
        width: '50%',
    },
  },
}

const Contact = (props) => {
  return (
    <div style={styles.root} >
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0',
        padding: '0',
        //border: '1px solid #e0e0e0',
      }}>
        <div key={1} style={styles.imageSection} >
          <Card>
            <CardMedia>
              <img src={HOUR_1} />
            </CardMedia>
          </Card>
        </div>

        <div key={2} style={styles.section} >
          <h1 style={{ marginTop: 0 }} >
            Contact information
            </h1>
          <p style={{ lineHeight: '1.5rem' }} >
            Booking and text... this cna be done differently of better ?
            </p>
          <Divider />
        </div>
      </div>
    </div>
  )
};

export default Radium(Contact);
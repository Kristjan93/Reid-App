import React from 'react';
import Radium from 'radium';

import { Card, CardMedia } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import { breakpoints, mediaBreakpoints }
  from '/imports/ui/variables/breakpoints.js';
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
};

const About = (props) => {
  return (
    <div style={ styles.root } >
      <div style={{
        display: 'flex',
        margin: '0',
        padding: '0',
      }}>
        <div key={1} style={ styles.imageSection } >
          <Card>
            <CardMedia>
              <img src={HOUR_1} />
            </CardMedia>
          </Card>
        </div>

        <div key={2} style={ styles.section } >
            <h1 style={{ marginTop: 0 }} >
              About us
            </h1>
            <p style={{ lineHeight: '1.5rem' }} >
              {text}
            </p>
            <Divider />
          <h1 style={{ marginTop: 0 }} >
              Some other Title
            </h1>
            <p style={{ lineHeight: '1.5rem' }} >
              {text}
            </p>
        </div>
      </div>
    </div>
  )
}

let text = 'We welcome you to our farm Myrkholt, located in in the southwest part of Iceland, about 1 hour drive from Reykjavík. Our farm is well located between Gullfoss and Geysir two of Icelandic´s most beautiful natural wonders. Geysir horses is a small family run business. Our horses are a part of the family and we put a great effort into ensuring they are both happy and healthy.';

export default Radium(About);
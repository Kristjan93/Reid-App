import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router'; let _Link = Radium(Link);

import RaisedButton from 'material-ui/RaisedButton';
import Email from 'material-ui/svg-icons/communication/email';

import { mediaBreakpoints } from '/imports/ui/variables/breakpoints.js';
import { FOR_3 } from '/imports/ui/variables/paths/Images.js';

import GoogleMap from '/imports/ui/common/GoogleMap.jsx';
import IntroTextBlock from './Home/IntroTextBlock.jsx';
import Carousel from '/imports/ui/common/Carousel.jsx';

const styles = {
  jumbotron: {
    display: 'flex',
    height: '90vh',
    text: {
      flex: '1',
      
      h1: {
        fontSize: '48px',
        margin: 0,
      },
      pDiv: {
        p: {
          fontSize: '24px',
        },
      }
    },
  }
};

class Home extends React.Component {
  render() {
    return (
      <div style={{width: '100%'}}>

      <Carousel />

      <IntroTextBlock />

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          <div style={{
            flex: '1 1 320px',
            height: '500px',
            background: 'grey',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ flex: '1', textAlign: 'center' }}>
              <p>Information</p>
              <ul>
                <li>Booking</li>
                <li>Important information</li>
              </ul>
            </div>

            <div style={{ flex: '1', textAlign: 'center' }}>
              <p>Can we Help you ?</p>
              <RaisedButton style={{ margin: '12px' }}
                label="Contact us"
                labelPosition="after"
                primary={true}
                icon={<Email />}
              />
              <p>Or contact us by phone 112</p>
            </div>
          </div>

          <div
            className='my-google-map'
            style={{
            flex: '1 1 320px',
            height: '500px',
            display: 'flex',
          }}>
            <GoogleMap />
          </div>

        </div>

      </div>
    );
  }
}

export default Radium(Home);

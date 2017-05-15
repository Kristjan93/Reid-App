import React from 'react';
import Radium from 'radium';
//import HomeImageGallery from './Home/HomeImageGallery.jsx';

import RaisedButton from 'material-ui/RaisedButton';
import Email from 'material-ui/svg-icons/communication/email';

import TourList from '../components/TourList/TourList.jsx';

import { mediaBreakpoints } from '../constants/breakpoints.js';

import { FOR_3 } from '../constants/srcPictures.js';

import GoogleMap from './Home/GoogleMap.jsx';

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
        {/* TODO I hate this */}
        {/*<HomeImageGallery />*/}
        <div style={{
          width: '100%',
          height: '60vh'
        }}>
          <div style={{
            backgroundImage: `url(${FOR_3})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
          }}>
        </div>
      </div> 

      <div style={{width: '100%', textAlign: 'center' }}>
        <h1>Title</h1>
        <p style={{
          lineHeight: '1.5rem',
          fontSize: '18px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {lorem}
        </p>
      </div>

        {/* 
        <div>
          <TourList tours={this.props.route.data} itemStyle={{
            [mediaBreakpoints.tablet]: {
              width: '50%',
            },
            [mediaBreakpoints.desktop]: {
              width: '33.3333%',
            },
          }}/>
          </div>
          */}
        
        <div style={{
          padding: '26px 0',
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
// background-color: #f5f5f5;
export default Radium(Home);


const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis sapien ut libero pellentesque, at volutpat mauris euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sem lacus, lobortis sed pharetra in, commodo non tortor. Aliquam et tellus ornare, sodales turpis ut, congue ex.';
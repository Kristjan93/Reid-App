import React from 'react';
import Radium from 'radium';
import HomeImageGallery from './Home/HomeImageGallery.jsx';

import RaisedButton from 'material-ui/RaisedButton';
import Email from 'material-ui/svg-icons/communication/email';

import TourList from '../components/TourList/TourList.jsx';

import { mediaBreakpoints } from '../constants/breakpoints.js';

const styles = {
  jumbotron: {
    display: 'flex',
    backgroundColor: '#f5f5f5',
    text: {
      flex: '1',
      textAlign: 'center',
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
      <div>
        {/* TODO I hate this */}
        <HomeImageGallery />

        <div style={ styles.jumbotron }>
          <div style={ styles.jumbotron.text }>
            <h1 style={ styles.jumbotron.text.h1 }>
              Tours
            </h1>
            <div style={{}}>
              <p style={styles.jumbotron.text.pDiv.p}>{lorem}</p>
            </div>
          </div>
        </div>

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
                <li>Most important</li>
                <li>Second important</li>
                <li>Forth because we lost third</li>
                <li>Sorry for that</li>
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

          <div style={{
            flex: '1 1 320px',
            height: '500px',
            background: 'green',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            Google Maps.
          </div>
        </div>

      </div>  
    );
  }
}
// background-color: #f5f5f5;
export default Radium(Home);


const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis sapien ut libero pellentesque, at volutpat mauris euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sem lacus, lobortis sed pharetra in, commodo non tortor. Aliquam et tellus ornare, sodales turpis ut, congue ex.';
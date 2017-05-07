import React from 'react';
import Radium from 'radium';
import NotFound from './NotFound.jsx';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import TourPointsInfo from '../components/Tour/TourPointsInfo.jsx';
import { KIDS }
  from '../constants/srcPictures.js';
import { mediaBreakpoints } from '../constants/breakpoints.js';

const styles = {
  Tour: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0',
    padding: '0',
    item: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '0',
      padding: '1rem',
      //background: 'green',
      [mediaBreakpoints.tablet]: {
        width: '50%',
      },
    },
  }
};

const Tour = ({ params ,route: { data } }) => {
  let filterTour = data.filter(x => (x.id === params.id));
  let tour = filterTour[0] || filterTour[0];
  return (
    <div style={{ width: '100%' }}>
      
      <div style={{
        width: '100%',
        height: '50vh'
      }}>
        <div style={{
          backgroundImage: 'url(/images/lala.jpg)',
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
          {text}
        </p>
      </div>

      <div style={styles.Tour}>
        
        {/*<div style={styles.Tour.item}>
          <Card>
            <CardMedia>
              <img src={tour.imageSrc} />
            </CardMedia>
            
          </Card>
        </div>*/}
        <div style={[styles.Tour.item, {display: 'initial', width: '100%'}]}>
          <Card>
            <CardText style={{ fontSize: '1rem' }} >
              <TourPointsInfo />
            </CardText>

            <CardActions>
              <RaisedButton
                containerElement={<Link to={null}/>}
                label="Book Tour"
                fullWidth={true}
                primary={true} />
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}


const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis sapien ut libero pellentesque, at volutpat mauris euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sem lacus, lobortis sed pharetra in, commodo non tortor. Aliquam et tellus ornare, sodales turpis ut, congue.';

export default Radium(Tour);
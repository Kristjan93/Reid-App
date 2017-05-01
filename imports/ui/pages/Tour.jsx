import React from 'react';
import Radium from 'radium';
import NotFound from './NotFound.jsx';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

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
  let tour = data.filter(x => (x.id === params.id));
  return (
    <div style={{ width: '100%' }}> 
      <div style={styles.Tour}>
        <div style={styles.Tour.item}>
          <Card>
            <CardMedia>
              <img src={KIDS} />
            </CardMedia>
          </Card>
        </div>
        <div style={[styles.Tour.item, {display: 'initial', width: '100%'}]}>
          <Card>
            <CardTitle title={'Title'} subtitle={'price'}/>

            <CardText style={{ fontSize: '1rem' }} >
              sdknads asldksad saldknsadlkndsvjn asdlksndn sdlknasd sksn saldns.
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

export default Radium(Tour);
import React from 'react';
import Radium from 'radium'
import { Link } from 'react-router'; let _Link = Radium(Link);

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Flag from 'material-ui/svg-icons/content/flag';
import Clock from 'material-ui/svg-icons/device/access-time';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const styles = {
  TourItem: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
  }
};

const TourItem = ({ id, title, price, imageSrc ,imageWidth ,text ,style, duration, departures }) => {
  return (
    <div style={ [styles.TourItem, style] } >
      <Card>
        <CardMedia
          overlayContentStyle={{ background: 'none', bottom: 'inherit' }}
          overlay={
              <CardTitle
                titleStyle={{
                  fontSize: '30px',
                  display: 'inline',
                  textShadow: 'black 0.1em 0.1em 0.7em',
                  padding: '5px',
                }}
            title={title} />
          }
        >
          <img src={imageSrc} />
        </CardMedia>

        <CardTitle 
          title={`ISK ${price}`}
          subtitle={
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <span>
                <Clock />
                <span>Duration: {duration}.</span>
              </span>

              <span>
                <Flag />
                <span>Departures: {departures}.</span>
              </span>
            </span>
          }
        />

        <CardText style={{ fontSize: '1rem' }} >
          {text}
        </CardText>

        <CardActions>
          <RaisedButton
            containerElement={<_Link to={`/tours/${id}`}/>}
            label="Book Tour"
            fullWidth={true}
            primary={true} />
        </CardActions>
      </Card>
    </div>
  );
}

export default Radium(TourItem); 
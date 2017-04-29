import React from 'react';
import Radium from 'radium'
import { mediaBreakpoints } from '../../constants/breakpoints.js';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  TourItem: {
    display: 'flex',
    padding: '1rem',
    [mediaBreakpoints.tablet]: {
      width: '50%',
    },
  }
};

const TourItem = ({ title ,imageSrc ,imageWidth ,text ,style }) => {
  return (
    <div style={ [styles.TourItem]} >
      <Card>
        <CardMedia
          overlayContentStyle={{ background: 'none', bottom: 'inherit' }}
          overlay={<CardTitle titleStyle={{fontSize: '30px'}} title={title}/>}>
          <img src={imageSrc} />
        </CardMedia>

        <CardTitle title="ISK 7.000" subtitle={
          <span>
            <FontIcon style={{ paddingRight: '5px' }} className="fa fa-clock-o" />
            1 hours
          </span>  
        }/>

        <CardText style={{ fontSize: '1rem' }} >
          {lorem}
        </CardText>

        <CardActions>
          <RaisedButton label="Book Tour" fullWidth={true} primary={true} />
        </CardActions>
      </Card>
    </div>
  );
}

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export default Radium(TourItem);



// <div style={{
//             display: 'flex',
//             minHeight: '52px',
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}>
//           <div style={{flex: '1'}}>  
//             <FontIcon style={{paddingRight: '5px'}} className="fa fa-clock-o" />
//             <span>Duration: </span> 
//             <span>4 hours</span>
//           </div>
//           <div style={{flex: '1'}}>  
//             <FontIcon style={{paddingRight: '5px'}} className="fa fa-clock-o" />
//             <span>Duration: </span> 
//             <span>4 hours</span>
//           </div>
//         </div>    
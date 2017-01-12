import React from 'react';
import Radium from 'radium'

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';

const styles = {
  base: {
    li: {
      maxWidth: '546.4px',
    },
  },
};

class CardItem extends React.Component {
  render() {
    return (
      <li style={styles.base.li} >
        <Card>

          <CardMedia>
            <img style={ {width: this.props.imageWidth} } src={this.props.imageSrc} />
          </CardMedia>

          <CardTitle 
            title={ 
              <Link 
                style={ { textDecoration: 'none', color: '#2196F3'} }
                to='#'> {this.props.title} 
              </Link> }
          >
            <Divider/>
          </CardTitle>
          
            <CardText style={ {fontSize: '1rem'} } >
              {this.props.text}
            </CardText>
        </Card>
      </li>
    );
  }
}

export default Radium(CardItem);

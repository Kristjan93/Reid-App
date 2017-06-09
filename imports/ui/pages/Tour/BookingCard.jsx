import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const BookingCard = (props) => {
  return (
    <Card>
      <CardTitle title={'Booking'} />

      <CardText style={{ fontSize: '1rem' }} >
          General information booking by email, phone and question etc...
      </CardText>
    </Card>
  );
};

export default Radium(BookingCard);


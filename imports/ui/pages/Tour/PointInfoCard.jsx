import React from 'react';
import Radium from 'radium';

import { Card, CardText } from 'material-ui/Card';
import PointInfoList from './PointInfoList.jsx';

const PointInfoCard = ({ info }) => {
  return (
    <Card>
      <CardText>
        <PointInfoList info={info} />
      </CardText>
    </Card>
  );
};

export default Radium(PointInfoCard);
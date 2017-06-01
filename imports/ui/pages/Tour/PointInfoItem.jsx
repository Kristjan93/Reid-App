import React from 'react';
import Radium from 'radium';

import { ListItem } from 'material-ui/List';
import InsertEmoticon from 'material-ui/svg-icons/editor/insert-emoticon';
import Flag from 'material-ui/svg-icons/content/flag';
import Clock from 'material-ui/svg-icons/device/access-time';
import People from 'material-ui/svg-icons/social/people';
import Info from 'material-ui/svg-icons/action/info';

const styles = {
  PointInfo: {
    text: {
      display: 'inherit',
      height: 'initial',
      whiteSpace: 'initial',
      overflow: 'auto',
    }
  }
};

const PointInfoItem = ({ type ,title, text, nestedText }) => {
  let leftIcon = ''
  switch (type) {
    case 'duration':
      leftIcon = <Clock />;
      break;
    case 'departures':
      leftIcon = <Flag />;
      break;
    case 'groupSize':
      leftIcon = <People />;
      break;
    case 'included':
      leftIcon = <Info />;
      break;
    default:
    leftIcon = <InsertEmoticon />;
      break;
  };

  return (
    <ListItem 
      leftIcon={leftIcon}
      primaryText={title}

      secondaryText={
        <p style={styles.PointInfo.text}> 
          {text}
        </p>
      }

      disabled={!nestedText}
      primaryTogglesNestedList={true}
      nestedItems={!nestedText ? []: [
        <ListItem key={1}
          primaryText={nestedText}
        />
      ]}
    />
  );
};

export default Radium(PointInfoItem); 
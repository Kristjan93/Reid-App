import React from 'react';
import Radium from 'radium';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import Schedule from 'material-ui/svg-icons/action/schedule';
import Flag from 'material-ui/svg-icons/content/flag';
import Accessibility from 'material-ui/svg-icons/action/accessibility';
import InsertEmoticon from 'material-ui/svg-icons/editor/insert-emoticon';
import NaturePeople from 'material-ui/svg-icons/image/nature-people';
import DriveEta from 'material-ui/svg-icons/notification/drive-eta';
import LocalDining from 'material-ui/svg-icons/maps/local-dining';


import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

const styles = {
  TourPointsInfo: {
    primaryText: {
      display: 'inherit',
      height: 'initial',
    }
  }
};

const TourPointsInfo = ({ route, ...rest }) => {
  return (
    <div>
      <Divider />
      <ListItem
        leftIcon={<Schedule />}
        primaryText="Duration"
        secondaryText={<p style={styles.TourPointsInfo.primaryText}>3 hours with transfer.</p>}
      />
      <Divider />
      <ListItem
        leftIcon={<Flag />}
        primaryText="Departure"
        secondaryText={<p style={styles.TourPointsInfo.primaryText}>3 hours with transfer (Riding time 1.5 hours)</p>}
      />
      <Divider />
      <ListItem
        leftIcon={<InsertEmoticon />}
        primaryText="Riding skills"
        secondaryText={<p style={styles.TourPointsInfo.primaryText}>For everyone.</p>}
      />
      <Divider />
      <ListItem
        leftIcon={<NaturePeople />}
        primaryText="Gear and clothing"
        secondaryText={<p style={styles.TourPointsInfo.primaryText}>
            We provide all gear you need helmets, shoes, etc.
            Given every whether we will have you covered in the appropriate cloths.
          </p>}
        secondaryTextLines={2}
      />
      <Divider />
      <ListItem
        leftIcon={<DriveEta />}
        primaryText="Pickup from Reykjavík - (+2.500 ISK)"
        secondaryText={<p style={styles.TourPointsInfo.primaryText}>
          We can pick you up</p>}
      />
      <Divider />
      <Divider />
      <ListItem
        leftIcon={<LocalDining />}
        primaryText="Food is included"
        secondaryText={<p style={styles.TourPointsInfo.primaryText}>
          We have have food ! for the horses sorry</p>}
      />
    </div>
  );
}

export default Radium(TourPointsInfo);
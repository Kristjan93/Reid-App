import React from 'react';
import Radium from 'radium';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

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
import Info from 'material-ui/svg-icons/action/info';
import Close from 'material-ui/svg-icons/navigation/close';

import PointInfo from './TourPointsInfo/PointInfo.jsx';

const styles = {
  TourPointsInfo: {
    primaryText: {
      display: 'inherit',
      height: 'initial',
    }
  }
};

class TourPointsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      rightIcon: <Info />,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle () {
    this.setState({
      open: !this.state.open,
      rightIcon: this.state.open ? <Info /> : <Close />
    });
  };

  render() {
    let { route, ...rest } = this.props;
    return (
      <div>
        <PointInfo
          key={1}
          leftIcon={<InsertEmoticon />}
          primaryText="Riding skills"
          secondaryText={<p style={styles.TourPointsInfo.primaryText}>For everyone.</p>}
          primaryTogglesNestedList={true}
          nestedInfoText={'Bla'} />

        <Divider />

        <PointInfo
          key={2}
          leftIcon={<NaturePeople />}
          primaryText="What is included"
          secondaryText={
            <p style={styles.TourPointsInfo.primaryText}>
              Riding helmets and if needed rainwear. 
            </p>}
          primaryTogglesNestedList={true} />
        
        <Divider />

        <PointInfo
          key={3}
          leftIcon={<Schedule />}
          primaryText="Departure"
          secondaryText={
            <p style={styles.TourPointsInfo.primaryText}>
              Daily at 11:00 and 14:00. <br />
              Please be at the stable 15 minutes before departure.
            </p>}
          primaryTogglesNestedList={true} />

        <Divider />
        
        
        <Divider />

        <PointInfo
          key={5}
          leftIcon={<InsertEmoticon />}
          primaryText="What to bring"
          secondaryText={<p></p>}
          primaryTogglesNestedList={true}
          nestedInfoText={'We reccomend that you bring warm gloves and a thin hat that can fit under the riding helmet. Included in the price is that you can borrow; A helmet, a warm overall or rain coat and rain pants also we have rubber boots.'} />

        <Divider />
        * Duration
        * Accommodation ?  -> Link gljasteinn .is
      </div>
    )
  }
}

export default Radium(TourPointsInfo);

      // <ListItem
      //     leftIcon={<InsertEmoticon />}
      //     primaryText="Riding skills"
      //     secondaryText={<p style={styles.TourPointsInfo.primaryText}>For everyone.</p>}

      //     rightIcon={this.state.rightIcon}
      //     onNestedListToggle={this.handleToggle}
      //     open={this.state.open}
      //     primaryTogglesNestedList={true}
      //     nestedItems={[
      //       <ListItem key={1}
      //         primaryText="Riding skills"  
      //       />
      //     ]}
      // />
      // <Divider />
      // <ListItem
      //   leftIcon={<NaturePeople />}
      //   primaryText="Gear and clothing"
      //   secondaryText={<p style={styles.TourPointsInfo.primaryText}>
      //       We provide all gear you need helmets, shoes, etc.
      //       Given every whether we will have you covered in the appropriate cloths.
      //     </p>}
      //   secondaryTextLines={2}
      // />
      // <Divider />
      // <ListItem
      //   leftIcon={<DriveEta />}
      //   primaryText="Pickup from Reykjavík - (+2.500 ISK)"
      //   secondaryText={<p style={styles.TourPointsInfo.primaryText}>
      //     We can pick you up</p>}
      // />
      // <Divider />
      // <ListItem
      //   leftIcon={<LocalDining />}
      //   primaryText="Food is included"
      //   secondaryText={<p style={styles.TourPointsInfo.primaryText}>
      //     We have have food ! for the horses sorry</p>}
      // />
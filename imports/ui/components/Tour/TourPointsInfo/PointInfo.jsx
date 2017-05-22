import React from 'react';
import Radium from 'radium';

import {List, ListItem} from 'material-ui/List';
import Info from 'material-ui/svg-icons/action/info';
import Close from 'material-ui/svg-icons/navigation/close';

class PointInfo extends React.Component{
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      open: false,
      rightIcon: <Info />,
    };
  }

  handleToggle () {
    this.setState({
      open: !this.state.open,
      rightIcon: this.state.open ? <Info /> : <Close />
    });
  };

  render() {
    let {nestedInfoText, disabled, ...rest} = this.props;
    return (
      <ListItem {...rest}
        open={this.state.open}
        onNestedListToggle={this.handleToggle}

        disabled={!nestedInfoText}
        rightIcon={ !nestedInfoText ? null : this.state.rightIcon}
        nestedItems={ !nestedInfoText ? [] : [
          <ListItem key={1}
            primaryText={nestedInfoText || ''}
          />
        ]}
      />
    );
  };
}

export default Radium(PointInfo); 
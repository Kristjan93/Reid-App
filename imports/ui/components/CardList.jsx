import React from 'react';
import Radium from 'radium'

import CardItem from './CardItem.jsx';

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
};

class CardList extends React.Component {
  renderCard(item, index) {
    return (
      <CardItem
        key={index}
        imageSrc={item.imageSrc}
        imageWidth={item.imageWidth}
        title={item.title}
        text={item.text} />
    );
  }

  render() {
    return (
      <ul style={[styles.base, this.props.style]} >
        {this.props.cards.map(this.renderCard)}
      </ul>
    );
  }
}

export default Radium(CardList);

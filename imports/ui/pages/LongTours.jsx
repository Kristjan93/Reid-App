import React from 'react';
import Radium from 'radium';

import CardList from '../components/CardList.jsx';

import { CARDS_SPECIAL_WINTER_TOUR, CARDS_THREE_DAY_RIDE } from '../constants/srcPictures.js';

const styles = {
  base: {

  },
};

const cards = [
  {
    imageSrc: CARDS_SPECIAL_WINTER_TOUR,
    imageWidth: '546.4px',
    title: 'Gullfoss Geysir Special Winter Tour',
    text: 'Winter riding in the countryside and visit the most famous places in Iceland Gullfoss and Geysir.'
  },
  {
    imageSrc: CARDS_THREE_DAY_RIDE,
    imageWidth: '546.4px',
    title: 'Visit Usss',
    text: 'Opportunity to interact with the horses and experience Icelandic country living..',
  }
];

class LongTours extends React.Component {

  render() {
    return (
      <CardList cards={cards} />
    );
  }
}

export default Radium(LongTours);
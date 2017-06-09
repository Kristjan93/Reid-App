import { 
    CARDS_SPECIAL_WINTER_TOUR, 
    CARDS_THREE_DAY_RIDE,
    HOUR_2,
    HOUR_1 } from '/imports/ui/variables/paths/Images.js';

const defaultVal = {
  whaTtoBring: 'We recommend that you bring warm gloves and a thin hat that can fit under the riding helmet. Included in the price is that you can borrow; A helmet, a warm overall or rain coat and rain pants also we have rubber boots.'
};

let tours = [
  {
    id: 'in-to-the-wild',
    title: 'In To The Wild',
    price: '13.000',
    imageSrc: HOUR_2,
    carouselImagesSrc: [],

    info: {
      duration:
      { 
        type: 'duration',
        title: 'Duration',
        text: '2 hour',
        nestedText: ''
      },
      departures: { 
        type: 'departures', 
        title: 'Departures', 
        text: 'Daily at 10:00 and 14:00',
        nestedText: '' 
      },
      groupSize: { 
        type: 'groupSize', 
        title: 'Group size', 
        text: 'Up to 8 riders',
        nestedText: ''  
      },
      included: { 
        type: 'included', 
        title: 'Included', 
        text: 'Riding helmets and if needed rainwear.', 
        nestedText: 'Some more text.' 
      },
    },

    text: 'Come and experience the Icelandic horse and experience an adventure to  ride in a beutiful nature.',
    primaryText: 'Come and experience the Icelandic horse and experience an adventure to  ride in a beutiful nature.',
  },

  {
    id:               'country-ride',
    title:            'Country Ride',
    price:            '9.000',
    imageSrc:         HOUR_1,
    carouselImagesSrc: [],

    info: {
      duration:   { type: 'duration', title: 'Duration', text: '1 hour', nestedText: '' },
      departures: { type: 'departures', title: 'Departures', text: 'Daily at 11:00',nestedText: '' },
      groupSize:  { type: 'groupSize', title: 'Group size', text: 'Up to 8 riders',nestedText: ''  },
      included:   { 
        type: 'included', 
        title: 'Included', 
        text: 'Riding helmets and if needed rainwear.', 
        nestedText: 'Some more text.' 
      },
    },

    text: 'Come and experience the Icelandic horse and experience an adventure to  ride in a beutiful nature.',
    primaryText: 'Come and experience the Icelandic horse and experience an adventure to  ride in a beutiful nature.',
  },
];

export const _Tours = {
  get: function() {
    return tours || {};
  },
  getById: function(id = null) {
    let tour = tours.filter(x => (x.id === id));
    return tour = tour[0] || null;
  }
};
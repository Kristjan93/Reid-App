import { CARDS_SPECIAL_WINTER_TOUR, CARDS_THREE_DAY_RIDE} from './srcPictures.js';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis sapien ut libero pellentesque, at volutpat mauris euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sem lacus, lobortis sed pharetra in, commodo non tortor. Aliquam et tellus ornare, sodales turpis ut, congue ex.';

const tourItems = [
  {
    id: 'in-to-the-wild',
    title: 'In To The Wild',
    price: '13.000',
    duration: '2 hour',
    imageSrc: CARDS_SPECIAL_WINTER_TOUR,
    text: 'Winter riding in the countryside and visit the most famous places in Iceland Gullfoss and Geysir.',
  },
  {
    id: 'country-ride',
    title: 'Country Ride',
    price: '9.000',
    duration: '1 hour',
    imageSrc: CARDS_THREE_DAY_RIDE,
    text: 'Opportunity to interact with the horses and experience Icelandic country living..',
  },
];



export { tourItems };
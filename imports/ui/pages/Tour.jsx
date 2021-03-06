import React from 'react';
import Radium from 'radium';

import { KIDS } from '/imports/ui/variables/paths/Images.js';
import { mediaBreakpoints } from '/imports//ui/variables/breakpoints.js';
import { _Tours } from '/imports/api/Tours.js';

import BookingCard from './Tour/BookingCard.jsx';
import PointInfoCard from './Tour/PointInfoCard.jsx'
import GoodToKnowInfo from './Tour/GoodToKnowInfo.jsx';
import NotFound from './NotFound.jsx';

const styles = {
  contentContainer: {
    maxWidth: '1400px',
    padding: '26px 26px',
  },
  Tour: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0',
    padding: '0',
    item: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '0',
      padding: '1rem',
      [mediaBreakpoints.min.tablet]: {
        width: '50%',
      },
    },
  }
};

const Tour = ({ params, ...rest }) => {
  tour = _Tours.getById(params.id); 

  if( !tour ) return <NotFound />

  let { id ,title ,price ,imageSrc ,carouselImagesSrc ,info ,text } = tour;

  return (
    <div style={{ width: '100%' }}>
      
      <div style={{ width: '100%', height: '50vh' }}>
        <div style={{
          backgroundImage: 'url(/images/lala.jpg)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        }}>
        </div>
      </div>

      <div style={{width: '100%', textAlign: 'center' }}>
        
        <h1 style={{ marginBottom: '4px' }}>
          {title}
        </h1>
        <h2 style={{ 
          fontSize: '1rem',
          marginBottom: '26px',
         }} >
          - Available in summer time -
        </h2>

        <p style={{
          lineHeight: '1.5rem',
          fontSize: '18px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {text}
        </p>
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '26px auto',
      }}>
        <div style={styles.Tour}>
          <div 
            key={1} 
            style={ [styles.Tour.item, {display: 'initial', width: '100%'}] }
          >
            <PointInfoCard info={info} />
          </div>
          
          <div 
            key={2} 
            style={[styles.Tour.item, {display: 'initial', width: '100%'}]}
          >
            <BookingCard />
          </div>
        </div>

        <GoodToKnowInfo />
      </div>
    </div>
  );
}

export default Radium(Tour);
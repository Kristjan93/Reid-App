import React from 'react';
import { withGoogleMap, GoogleMap as _GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

import CircularProgress from 'material-ui/CircularProgress';

const styles = {

};

const SimpleMapExampleGoogleMap = withScriptjs(
  withGoogleMap(props => (
    <_GoogleMap
      ref={props.onMapLoad}
      defaultZoom={12}
      defaultCenter={{ lat: 64.304613, lng: -20.219680 }}
      options={{ scrollwheel: false }}>
      <Marker
        defaultPosition={{ lat: 64.304551, lng: -20.219693 }}
      />
    </_GoogleMap>
  ))
);

const GoogleMap = (props) => {
  const _googleMapURL =
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyAMKOFkSp9XAhAlM3Vyjh_Rxol66Np0An4';

  return (
    <div style={{ height: '100%', width: '100%', }}>
      <SimpleMapExampleGoogleMap
        googleMapURL={_googleMapURL}
        loadingElement={
          <div style={{ height: '100%', textAlign: 'center' }}>
            <p>Loading Google Maps...</p>  
            <CircularProgress size={80} thickness={5} />
          </div>
        } 
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    </div>
  );
}

export default GoogleMap;
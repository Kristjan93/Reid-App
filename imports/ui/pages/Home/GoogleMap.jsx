import React from 'react';
import { withGoogleMap, GoogleMap as _GoogleMap, Marker } from "react-google-maps";

const styles = {

};

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <_GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 64.304551, lng: -20.219693 }}
    options={{ scrollwheel: false }}>
    <Marker
      defaultPosition={{ lat: 64.304551, lng: -20.219693 }}
    />
    </_GoogleMap>
));

const GoogleMap = (props) => {
  return (
    <div style={{ height: '100%', width: '100%', }}>
      <SimpleMapExampleGoogleMap
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
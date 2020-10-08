import React from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAP_API_KEY } from '../credentials';

const Marker = ({ text, color }) => {
  return (
    <div>
      <div class="tooltip">
      <div className=" tooltip pin bounce" style={{ backgroundColor: color, cursor: 'pointer' }}  />
        <span class="tooltiptext">{text}</span>
      </div>
      <div className="pulse" />
    </div>
  );
};

const Map = ({ center, zoom, locations }) => {
  return (
    <GoogleMapReact bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }} defaultCenter={center} defaultZoom={zoom}>
      {locations.map((element, id) => (
        <Marker lat={element.location?.lat} lng={element.location?.lng} text={element.text} color="red" key={id} />
      ))}
    </GoogleMapReact>
  );
};

export default Map;

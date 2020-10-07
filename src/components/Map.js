import React from 'react';
import GoogleMapReact from 'google-map-react';

// import { GoogleMapReact, withScriptjs, withGoogleMap } from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const Marker = ({ color, name, id }) => {
//     return (
//       <div className="marker"
//         style={{ backgroundColor: color, cursor: 'pointer'}}
//         title={name}
//       />
//     );
//   };

const markersList = [
    {lat: 6.1942598, lng: -75.6035291}
]

const createMarker = ({ map, maps }) => {
    const markers = markersList.map(data => {
      return new maps.Marker({ position: data, title: 'aaa' });
    });
  };

const Map = (props) => {
  //   return <GoogleMapReact defaultZoom={16} defaultCenter={{ lat: 6.1942598, lng: -75.6035291 }}></GoogleMapReact>;
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: `AIzaSyCwq8HZte6gFxqVIYxHmI1FN60OBAPGhNQ` }}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
      onGoogleApiLoaded={createMarker}
    >
      {/* <AnyReactComponent lat={6.1942598} lng={-75.6035291} text="My Marker"  /> */}

      {/* <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 6.1942598, lng: -75.6035291}} /> */}

      {/* <Marker
            lat={6.1942598} lng={-75.6035291}
            name="My Marker"
            color="blue"
          /> */}

    </GoogleMapReact>
  );
};

export default Map;
// export default withScriptjs(withGoogleMap(Map));

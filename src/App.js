import React from 'react';

// Redux
import { connect } from 'react-redux';
import { saveCurrentLocation } from './actions/locationActions';

// Components
import Container from './components/Container';
import Footer from './components/Footer';

const App = ({ dispatchSaveCurrentLocation }) => {

  // Get user current location
  navigator.geolocation.getCurrentPosition(function (position) {
    dispatchSaveCurrentLocation(position.coords.latitude, position.coords.longitude);
  });

  return (
    <div>
      <div className="container mx-auto my-6">
        <Container />
      </div>
      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveCurrentLocation: (lat, lng) => dispatch(saveCurrentLocation(lat, lng)),
});

export default connect(null, mapDispatchToProps)(App);

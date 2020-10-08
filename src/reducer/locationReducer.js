import { SAVE_CURRENT_LOCATION } from "../actions/constants/locationConstants";

// Parque Simón Bolivar - Bogota
const initialState = {
  lat: 4.6584849,
  lng: -74.0956466,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CURRENT_LOCATION:
      return {
        ...state,
        lat: action.lat,
        lng: action.lng,
      };

    default:
      return state;
  }
};

export default locationReducer;

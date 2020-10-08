import { SAVE_CURRENT_LOCATION } from "./constants/locationConstants";

export const saveCurrentLocation = (lat, lng) => ({
  type: SAVE_CURRENT_LOCATION,
  lat,
  lng,
});


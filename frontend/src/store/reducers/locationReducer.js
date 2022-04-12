import { GET_LOCATIONS, GET_LOCATION_OFFERS } from '../actions/locationActions';

const initialState = {
  locations: [],
  locationOffers: []
};

const locationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_LOCATION_OFFERS:
      return {
        ...state,
        locationOffers: action.payload
      };
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload
      };
    default:
      return state;
  }
};

export default locationReducer;

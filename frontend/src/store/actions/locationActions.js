import axios from 'axios';

export const GET_LOCATIONS = 'GET_LOCATIONS';
export const getLocationsAction = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/locations/');

    dispatch({
      type: GET_LOCATIONS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const GET_LOCATION_OFFERS = 'GET_LOCATION_OFFERS';
export const getLocationOffersAction = (payload) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/locations/${payload}/`);

    dispatch({
      type: GET_LOCATION_OFFERS,
      payload: response.data.offers
    });
  } catch (error) {
    console.log(error);
  }
};

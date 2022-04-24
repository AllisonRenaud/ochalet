import axios from 'axios';
import axiosInstance from '../../utils/axiosInstance';

export const LOADING_OFFER = 'LOADING_OFFER';
export const loadingOfferAction = (payload) => ({
  type: LOADING_OFFER,
  payload
});

export const GET_MY_OFFERS = 'GET_MY_OFFERS';
export const getSellerMyOffersAction = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/offers/my-offers/');

    dispatch({
      type: GET_MY_OFFERS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const GET_OFFERS = 'GET_OFFERS';
export const getOffersAction = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/offers/');
    dispatch({
      type: GET_OFFERS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const GET_DISABLED_DATES_OFFER = 'GET_DISABLED_DATES_OFFER';
export const getDisabledDatesOfferAction = (payload) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/bookings/dates-disabled/offer/${payload}/`);
    dispatch({
      type: GET_DISABLED_DATES_OFFER,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const CREATE_OFFER = 'CREATE_OFFER';
export const createOfferAction = (payload) => async (dispatch) => {
  try {
    dispatch(loadingOfferAction(true));
    const response = await axiosInstance.post('/offers/', payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.status === 200 && response.data) {
      dispatch(loadingOfferAction(false));
      dispatch({
        type: CREATE_OFFER,
        payload: response.data
      });
    } else {
      dispatch(loadingOfferAction(true));
    }
  } catch (error) {
    console.log(error);
  }
};

export const GET_OFFER_SELECTED = 'GET_OFFER_SELECTED';
export const getOfferSelectedAction = (payload) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/offers/detail/${payload}`);

    dispatch({
      type: GET_OFFER_SELECTED,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const UPDATE_OFFER = 'UPDATE_OFFER';
export const updateOfferAction = (payload, offerId) => async (dispatch) => {
  try {
    dispatch(loadingOfferAction(true));
    const response = await axiosInstance.patch(`/offers/${offerId}`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.status === 200 && response.data) {
      dispatch(loadingOfferAction(false));

      dispatch({
        type: UPDATE_OFFER,
        payload: response.data
      });
    } else {
      dispatch(loadingOfferAction(true));
    }
  } catch (error) {
    console.log(error);
  }
};

export const SET_DATE_RANGE_SELECTED = 'SET_DATE_RANGE_SELECTED';
export const setDateRangeSelectedAction = (payload) => ({
  type: SET_DATE_RANGE_SELECTED,
  payload
});

export const DELETE_OFFER = 'DELETE_OFFER';
export const deleteOfferAction = (payload) => async (dispatch) => {
  try {
    dispatch(loadingOfferAction(true));
    const response = await axiosInstance.delete(`/offers/${payload.offerId}`);

    if (response.status === 200 && response.data) {
      dispatch(loadingOfferAction(false));

      dispatch({
        type: DELETE_OFFER
      });

      if (payload.role === 'admin') {
        dispatch(getOffersAction());
      }

      if (payload.role === 'seller') {
        dispatch(getSellerMyOffersAction());
      }
    } else {
      dispatch(loadingOfferAction(true));
    }
  } catch (error) {
    console.log(error);
  }
};

export const CLEAN_OFFER_SELECTED = 'CLEAN_OFFER_SELECTED';
export const cleanOfferSelectedAction = () => ({
  type: CLEAN_OFFER_SELECTED
});

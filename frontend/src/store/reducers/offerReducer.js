import {
  CREATE_OFFER,
  GET_MY_OFFERS,
  GET_OFFERS,
  GET_OFFER_SELECTED,
  LOADING_OFFER,
  UPDATE_OFFER,
  SET_DATE_RANGE_SELECTED,
  DELETE_OFFER,
  GET_DISABLED_DATES_OFFER,
  CLEAN_OFFER_SELECTED
} from '../actions/offerActions';

const initialState = {
  offers: [],
  isLoading: false,
  offerSelected: null,
  disabledDates: [],
  // UI
  dateRangeSelected: false
};

const offerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLEAN_OFFER_SELECTED:
      return {
        ...state,
        offerSelected: null
      };
    case GET_DISABLED_DATES_OFFER:
      return {
        ...state,
        disabledDates: action.payload
      };
    case DELETE_OFFER:
      return {
        ...state
      };
    case SET_DATE_RANGE_SELECTED:
      return {
        ...state,
        dateRangeSelected: action.payload
      };
    case GET_OFFER_SELECTED:
      return {
        ...state,
        offerSelected: action.payload
      };
    case LOADING_OFFER:
      return {
        ...state,
        isLoading: action.payload
      };
    case CREATE_OFFER:
      return {
        ...state,
        offers: [...state.offers, action.payload]
      };
    case GET_OFFERS:
      return {
        ...state,
        offers: action.payload
      };
    case GET_MY_OFFERS:
      return {
        ...state,
        offers: action.payload
      };
    default:
      return state;
  }
};
export default offerReducer;

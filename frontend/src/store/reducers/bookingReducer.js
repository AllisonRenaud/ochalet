import {
  CREATE_BOOKING,
  GET_BOOKINGS_CLIENT,
  GET_BOOKINGS_SELLER,
  LOADING_BOOKING,
  UPDATE_BOOKING
} from '../actions/bookingActions';

const initialState = {
  bookings: [],
  isLoading: false
};

const bookingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_BOOKING: {
      return {
        ...state
      };
    }
    case LOADING_BOOKING:
      return {
        ...state,
        isLoading: action.payload
      };
    case CREATE_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.payload]
      };
    case GET_BOOKINGS_CLIENT:
      return {
        ...state,
        bookings: action.payload
      };
    case GET_BOOKINGS_SELLER:
      return {
        ...state,
        bookings: action.payload
      };
    default:
      return state;
  }
};

export default bookingReducer;

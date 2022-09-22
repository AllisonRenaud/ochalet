import { LOGIN, LOGOUT, SET_CONNECTED, SET_ERROR } from '../actions/authActions';

const initialState = {
  isConnected: false,
  error: false
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case LOGIN:
      return {
        ...state,
        isConnected: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isConnected: action.payload
      };
    case SET_CONNECTED:
      return {
        ...state,
        isConnected: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;

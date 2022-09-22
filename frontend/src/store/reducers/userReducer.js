import {
  CLEAN_PROFILE,
  DELETE_USER,
  GET_PROFILE,
  GET_USERS,
  LOADING_USER,
  REGISTER,
  UPDATE_PROFILE
} from '../actions/userActions';

const initialState = {
  profile: null,
  users: [],
  isLoading: false
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLEAN_PROFILE:
      return {
        ...state,
        profile: null
      };
    case DELETE_USER:
      return {
        ...state
      };
    case LOADING_USER:
      return {
        ...state,
        isLoading: action.payload
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case REGISTER:
      return {
        ...state,
        profile: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;

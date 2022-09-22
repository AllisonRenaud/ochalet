import { combineReducers } from 'redux';

import authReducer from './authReducer';
import bookingReducer from './bookingReducer';
import locationReducer from './locationReducer';
import offerReducer from './offerReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  offer: offerReducer,
  booking: bookingReducer,
  location: locationReducer
});

export default rootReducer;

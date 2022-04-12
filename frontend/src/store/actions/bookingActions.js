import axiosInstance from '../../utils/axiosInstance';

export const LOADING_BOOKING = 'LOADING_BOOKING';
export const loadingBookingAction = (payload) => ({
  type: LOADING_BOOKING,
  payload
});

export const GET_BOOKINGS_SELLER = 'GET_BOOKINGS_SELLER';
export const getBookingsSellerAction = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/bookings/validate/');

    dispatch({
      type: GET_BOOKINGS_SELLER,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const GET_BOOKINGS_CLIENT = 'GET_BOOKINGS_CLIENT';
export const getBookingsClientAction = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/bookings/my-bookings/');

    dispatch({
      type: GET_BOOKINGS_CLIENT,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const CREATE_BOOKING = 'CREATE_BOOKING';
export const createBookingAction = (payload) => async (dispatch) => {
  try {
    dispatch(loadingBookingAction(true));
    const response = await axiosInstance.post(`/bookings/offer/${payload.offerId}/`, {
      sellerId: payload.sellerId,
      dateStart: payload.startDate,
      dateEnd: payload.endDate
    });

    if (response.status === 200 && response.data) {
      dispatch(loadingBookingAction(false));
      dispatch({
        type: CREATE_BOOKING,
        payload: response.data
      });
    } else {
      dispatch(loadingBookingAction(true));
    }
  } catch (error) {
    console.log(error);
  }
};

export const UPDATE_BOOKING = 'UPDATE_BOOKING';
export const updateBookingAction = (payload) => async (dispatch) => {
  try {
    dispatch(loadingBookingAction(true));
    const response = await axiosInstance.patch(`/bookings/${payload.id}/`, { status: payload.status });

    if (response.status === 200 && response.data) {
      dispatch(loadingBookingAction(false));
      dispatch({
        type: UPDATE_BOOKING,
        payload: response.data
      });

      dispatch(getBookingsSellerAction());
    } else {
      dispatch(loadingBookingAction(true));
    }
  } catch (error) {
    console.log(error);
  }
};

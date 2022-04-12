import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { getProfileAction } from './userActions';

export const SET_ERROR = 'SET_ERROR';
export const setErrorAction = (payload) => ({
  type: SET_ERROR,
  payload
});

export const LOGIN = 'LOGIN';
export const loginAction = (payload) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/login/', payload);
    localStorage.setItem('accessToken', response.data.accessToken);

    const isConnected = response.data.accessToken && true;

    dispatch({
      type: LOGIN,
      payload: isConnected
    });

    dispatch(getProfileAction());
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: true
    });
  }
};

export const LOGOUT = 'LOGOUT';
export const logoutAction = () => {
  localStorage.removeItem('accessToken');
  return {
    type: LOGOUT,
    payload: false
  };
};

export const SET_CONNECTED = 'SET_CONNECTED';
export const setConnectedAction = (payload) => ({
  type: SET_CONNECTED,
  payload
});

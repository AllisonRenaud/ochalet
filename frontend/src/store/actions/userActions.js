import axios from 'axios';
import axiosInstance from '../../utils/axiosInstance';

// eslint-disable-next-line import/no-cycle
import { loginAction, setConnectedAction, SET_CONNECTED } from './authActions';

export const LOADING_USER = 'LOADING_USER';
export const loadingUserAction = (payload) => ({
  type: LOADING_USER,
  payload
});

export const CLEAN_PROFILE = 'CLEAN_PROFILE';
export const cleanProfileAction = () => ({
  type: CLEAN_PROFILE
});

export const REGISTER = 'REGISTER';
export const registerAction = (payload) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/users/create-user/', payload);
    dispatch({
      type: REGISTER,
      payload: response.data
    });

    if (response.data) {
      dispatch(loginAction({ email: payload.email, password: payload.password }));
    }
  } catch (error) {
    console.log(error);
  }
};

export const GET_PROFILE = 'GET_PROFILE';
export const getProfileAction = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/users/profile/');
    dispatch({
      type: GET_PROFILE,
      payload: response.data
    });

    dispatch({
      type: SET_CONNECTED,
      payload: response.data && true
    });
  } catch (error) {
    console.log(error);
  }
};

export const GET_USERS = 'GET_USERS';
export const getUsersAction = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/users/');
    dispatch({
      type: GET_USERS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const updateProfileAction = (payload) => async (dispatch) => {
  try {
    dispatch(loadingUserAction(true));
    const response = await axiosInstance.patch('/users/profile/', payload);

    if (response.status === 200 && response.data) {
      dispatch(loadingUserAction(false));

      dispatch({
        type: UPDATE_PROFILE,
        payload: response.data
      });
    } else {
      dispatch(loadingUserAction(true));
    }
  } catch (error) {
    console.log(error);
  }
};

export const DELETE_USER = 'DELETE_USER';
export const deleteUserAction = (payload) => async (dispatch) => {
  try {
    dispatch(loadingUserAction(true));
    const response = await axiosInstance.delete(`/users/${payload.userId}/`);

    if (response.status === 200 && response.data) {
      dispatch(loadingUserAction(false));

      dispatch({
        type: DELETE_USER
      });

      dispatch(getUsersAction());
    } else {
      dispatch(loadingUserAction(true));
    }
  } catch (error) {
    console.log(error);
  }
};

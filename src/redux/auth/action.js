import axios from "axios";

import * as types from "./actionTypes";

export const fetchAuthRequest = (payload) => {
  return {
    type: types.FETCH_AUTH_REQUEST,
    payload,
  };
};

export const fetchAuthSuccess = (payload) => {
  return {
    type: types.FETCH_AUTH_SUCCESS,
    payload,
  };
};

export const fetchAuthFailure = (payload) => {
  return {
    type: types.FETCH_AUTH_FAILURE,
    payload,
  };
};

export const submitData = (data) => (dispatch) => {
  //   dispatch(fetchAuthRequest());
  return axios({
    method: "POST",
    url: "https://divash-api.herokuapp.com/user/signup",
    data: data,
  }).then((res) => {
    // dispatch(fetchAuthSuccess(res.data));
    console.log(res);
  });
};

export const logData = (data) => (dispatch) => {
  dispatch(fetchAuthRequest());
  return axios({
    method: "POST",
    url: "https://divash-api.herokuapp.com/user/login",
    data: data,
  })
    .then((res) => {
      console.log(res.data);
      const success = fetchAuthSuccess(res.data);
      dispatch(success);
    })
    .catch((err) => {
      const error = fetchAuthFailure(res.data);
    });
};

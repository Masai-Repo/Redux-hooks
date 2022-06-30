import * as types from "./actionTypes";

export const fetchTaskRequest = (payload) => {
  return {
    type: types.FETCH_TASK_REQUEST,
    payload,
  };
};

export const fetchTaskSuccess = (payload) => {
  return {
    type: types.FETCH_TASK_SUCCESS,
    payload,
  };
};

export const fetchTaskFailure = (payload) => {
  return {
    type: types.FETCH_TASK_FAILURE,
    payload,
  };
};

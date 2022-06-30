import * as types from "./actionTypes";

const initState = {
  task: [],
  status: "Not Done",
  loading: false,
  error: "",
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        task: [...state.task, payload],
        status: "Not Done",
        error: "",
      };

    case types.FETCH_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;

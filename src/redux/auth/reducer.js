import * as types from "./actionTypes";

const initState = {
  auth: false,
  data: [],
  loading: false,
  error: "",
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: true,
        data: payload,
        error: "",
      };

    case types.FETCH_AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        auth: false,
      };
    default:
      return state;
  }
};

export default reducer;

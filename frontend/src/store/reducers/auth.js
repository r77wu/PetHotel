import * as actionTypes from "../actions/types";

const authStart = (state, action) => {
  return {
    ...state,
    token: null,
    error: null,
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.data.token,
    error: null,
  };
};

const authFail = (state, action) => {
  console.log(action.error);
  return {
    ...state,
    token: null,
    error: action.error.charAt(0).toUpperCase() + action.error.slice(1),
  };
};

const initialState = {
  token: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;

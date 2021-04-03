import * as actionTypes from "./types";
import axios from "axios";
import { tokenConfig } from "./utils";

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

const authSuccess = (data) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    data,
  };
};

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

const initalProfile = (getState) => {
  const initalForm = { first_name: "", last_name: "", phone: "" };
  axios
    .post("/account/profile/", initalForm, tokenConfig(getState))
    .catch((err) => console.log(err));
};

export const signup = (signupForm) => {
  return (dispatch, getState) => {
    dispatch(authStart);
    axios
      .post("/account/register/", signupForm)
      .then((res) => {
        dispatch(authSuccess(res.data.data));
        initalProfile(getState);
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.message));
      });
  };
};

export const login = (loginForm) => {
  return (dispatch) => {
    dispatch(authStart);
    axios
      .post("/account/login/", loginForm)
      .then((res) => {
        dispatch(authSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data));
      });
  };
};

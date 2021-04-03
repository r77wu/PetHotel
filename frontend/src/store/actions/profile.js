import * as actionTypes from "./types";
import axios from "axios";
import { tokenConfig } from "./utils";

const fetchPetsStart = () => {
  return {
    type: actionTypes.FETCH_PETS_START,
  };
};

const fetchPetsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PETS_SUCCESS,
    data,
  };
};

const fetchPetsFail = (error) => {
  return {
    type: actionTypes.FETCH_PETS_FAIL,
    error,
  };
};

const registerPetSuccess = (data) => {
  return {
    type: actionTypes.REGISTER_PET_SUCCESS,
    data,
  };
};

const createHotelOrderSuccess = (data) => {
  return {
    type: actionTypes.CREATE_HOTEL_ORDER_SUCCESS,
    data,
  };
};

const createGroomOrderSuccess = (data) => {
  return {
    type: actionTypes.CREATE_GROOM_ORDER_SUCCESS,
    data,
  };
};

const newAccountDetail = () => {
  return {
    type: actionTypes.NEW_ACCOUNT_DETAIL,
  };
};

const fetchAccountDetailSuccess = (data) => {
  return {
    type: actionTypes.FETCH_ACCOUNT_DETAIL_SUCCESS,
    data,
  };
};

const updatePetSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_PET_SUCCESS,
    data,
  };
};

const deletePetSuccess = (id) => {
  return {
    type: actionTypes.DELETE_PET_SUCCESS,
    id,
  };
};

const fetchHotelOrdersStart = () => {
  return {
    type: actionTypes.FETCH_HOTEL_ORDERS_START,
  };
};

const fetchHotelOrdersSuccess = (data) => {
  return {
    type: actionTypes.FETCH_HOTEL_ORDERS_SUCCESS,
    orders: data,
  };
};

const fetchGroomOrdersStart = () => {
  return {
    type: actionTypes.FETCH_GROOM_ORDERS_START,
  };
};

const fetchGroomOrdersSuccess = (data) => {
  return {
    type: actionTypes.FETCH_GROOM_ORDERS_SUCCESS,
    orders: data,
  };
};

const cancelHotelOrderSuccess = (id) => {
  return {
    type: actionTypes.CANCEL_HOTEL_ORDER_SUCCESS,
    id: id,
  };
};

const cancelGroomOrderSuccess = (id) => {
  return {
    type: actionTypes.CANCEL_GROOM_ORDER_SUCCESS,
    id: id,
  };
};

export const fetchPets = () => {
  return (dispatch, getState) => {
    dispatch(fetchPetsStart());
    axios
      .get("/pets/", tokenConfig(getState))
      .then((res) => {
        dispatch(fetchPetsSuccess(res.data.data.pets));
      })
      .catch((err) => dispatch(fetchPetsFail(err.response.data.message)));
  };
};

export const registerPet = (newPet) => {
  return (dispatch, getState) => {
    axios
      .post("/pets/", newPet, tokenConfig(getState))
      .then((res) => {
        dispatch(registerPetSuccess(res.data.data.pet));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createHotelOrder = () => {
  return (dispatch, getState) => {
    const orderForm = {
      ...getState().reservation.roomReservation,
    };
    axios
      .post("/reservation/roomReservation/", orderForm, tokenConfig(getState))
      .then((res) => dispatch(createHotelOrderSuccess(res.data.data.order)))
      .catch((err) => console.log(err));
  };
};

export const createGroomOrder = () => {
  return (dispatch, getState) => {
    const groomReservation = {
      ...getState().reservation.groomReservation,
    };
    const orderForm = {
      date_time: `${groomReservation.date} ${groomReservation.time}`,
      groom: groomReservation.groom,
      pet: groomReservation.pet,
    };
    axios
      .post("/reservation/groomReservation/", orderForm, tokenConfig(getState))
      .then((res) => dispatch(createGroomOrderSuccess(res.data.data.order)))
      .catch((err) => console.log(err));
  };
};

export const fetchProfile = () => {
  return (dispatch, getState) => {
    axios
      .get("/account/profile/", tokenConfig(getState))
      .then((res) => {
        if (
          res.data.message &&
          res.data.message === "Please create your Profile"
        ) {
          dispatch(newAccountDetail());
        } else {
          const profileDetail = {
            first_name: res.data.profile.first_name,
            last_name: res.data.profile.last_name,
            phone: res.data.profile.phone,
          };
          dispatch(fetchAccountDetailSuccess(profileDetail));
        }
      })
      .catch((err) => console.log(err.response));
  };
};

export const updateAccountDetail = (updatedForm) => {
  return (dispatch, getState) => {
    axios
      .put("/account/profile/", updatedForm, tokenConfig(getState))
      .then((res) => {
        const profileDetail = {
          first_name: res.data.profile.first_name,
          last_name: res.data.profile.last_name,
          phone: res.data.profile.phone,
        };
        dispatch(fetchAccountDetailSuccess(profileDetail));
      })
      .catch((err) => console.log(err.response));
  };
};

export const updatePetProfile = (id, updatedForm) => {
  return (dispatch, getState) => {
    axios
      .put(`/pets/detail/${id}`, updatedForm, tokenConfig(getState))
      .then((res) => dispatch(updatePetSuccess(res.data.pet)))
      .catch((err) => console.log(err.response));
  };
};

export const deletePet = (id) => {
  return (dispatch, getState) => {
    axios
      .delete(`/pets/detail/${id}`, tokenConfig(getState))
      .then((res) => dispatch(deletePetSuccess(id)))
      .catch((err) => console.log(err.response));
  };
};

export const fetchHotelOrders = () => {
  return (dispatch, getState) => {
    dispatch(fetchHotelOrdersStart());
    axios
      .get("/reservation/roomReservation/", tokenConfig(getState))
      .then((res) => {
        dispatch(fetchHotelOrdersSuccess(res.data));
      })
      .catch((err) => console.log(err.response));
  };
};

export const cancelHotelOrder = (id) => {
  return (dispatch, getState) => {
    const cancel = { status: 2 };
    axios
      .patch(
        `/reservation/roomReservation/${id}/`,
        cancel,
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch(cancelHotelOrderSuccess(res.data.id));
      })
      .catch((err) => console.log(err.response));
  };
};

export const fetchGroomOrders = () => {
  return (dispatch, getState) => {
    dispatch(fetchGroomOrdersStart());
    axios
      .get("/reservation/groomReservation/", tokenConfig(getState))
      .then((res) => {
        dispatch(fetchGroomOrdersSuccess(res.data));
      })
      .catch((err) => console.log(err.response));
  };
};

export const cancelGroomOrder = (id) => {
  return (dispatch, getState) => {
    const cancel = { status: 2 };
    axios
      .patch(
        `/reservation/groomReservation/${id}/`,
        cancel,
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch(cancelGroomOrderSuccess(res.data.id));
      })
      .catch((err) => console.log(err.response));
  };
};

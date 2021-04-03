import * as actionTypes from "./types";
import axios from "axios";

const checkAvailableRoomStart = () => {
  return {
    type: actionTypes.CHECK_AVAILABLE_ROOM_START,
  };
};

const checkAvailableRoomSuccess = (data) => {
  return {
    type: actionTypes.CHECK_AVAILABLE_ROOM_SUCCESS,
    data,
  };
};

const checkAvailableRoomFail = (error) => {
  return {
    type: actionTypes.CHECK_AVAILABLE_ROOM_FAIL,
    error,
  };
};

const checkAvailableGroomStart = () => {
  return {
    type: actionTypes.CHECK_AVAILABLE_GROOM_START,
  };
};

const checkAvailableGroomSuccess = (data) => {
  return {
    type: actionTypes.CHECK_AVAILABLE_GROOM_SUCCESS,
    data,
  };
};

const checkAvailableGroomFail = (error) => {
  return {
    type: actionTypes.CHECK_AVAILABLE_GROOM_FAIL,
    error,
  };
};

const selectRoom = (room) => {
  return {
    type: actionTypes.SELECT_ROOM,
    room,
  };
};

const selectPet = (pet) => {
  return {
    type: actionTypes.SELECT_PET,
    pet,
  };
};

const selectCheckInDate = (date) => {
  return {
    type: actionTypes.SELECT_CHECK_IN_DATE,
    date,
  };
};

const selectCheckOutDate = (date) => {
  return {
    type: actionTypes.SELECT_CHECK_OUT_DATE,
    date,
  };
};

const selectGroomDate = (date) => {
  return {
    type: actionTypes.SELECT_GROOM_DATE,
    date,
  };
};

const selectGroomTime = (time) => {
  return {
    type: actionTypes.SELECT_GROOM_TIME,
    time,
  };
};

const selectGroomService = (service) => {
  return {
    type: actionTypes.SELECT_GROOM_SERVICE,
    service,
  };
};

const selectGroomPet = (pet) => {
  return {
    type: actionTypes.SELECT_GROOM_PET,
    pet,
  };
};

export const checkAvailableRoom = (checkForm) => {
  return (dispatch) => {
    dispatch(checkAvailableRoomStart());
    axios
      .post("/reservation/availableRooms/", checkForm)
      .then((res) => {
        dispatch(checkAvailableRoomSuccess(res.data));
      })
      .catch((err) =>
        dispatch(checkAvailableRoomFail(err.response.data.message))
      );
  };
};

export const checkAvailableGroom = (checkForm) => {
  return (dispatch) => {
    dispatch(checkAvailableGroomStart());
    axios
      .post("/reservation/availableGrooms/", checkForm)
      .then((res) => {
        dispatch(checkAvailableGroomSuccess(res.data));
      })
      .catch((err) =>
        dispatch(checkAvailableGroomFail(err.response.data.message))
      );
  };
};

export const handleSelectRoomPet = (pet) => {
  return (dispatch) => {
    dispatch(selectPet(+pet));
  };
};

export const handleSelectRoom = (room) => {
  return (dispatch, getState) => {
    let roomType;
    room === 0 ? (roomType = "StandardRoom") : (roomType = "LuxuryRoom");
    const roomId = getState().reservation.availableRooms[roomType][0].id;
    dispatch(selectRoom(roomId));
  };
};

export const handleSelectCheckInDate = (date) => {
  return (dispatch) => {
    dispatch(selectCheckInDate(date));
  };
};

export const handleSelectCheckOutDate = (date) => {
  return (dispatch) => {
    dispatch(selectCheckOutDate(date));
  };
};

export const handleSelectGroomDate = (date) => {
  return (dispatch) => {
    dispatch(selectGroomDate(date));
  };
};

export const handleSelectGroomTime = (time) => {
  return (dispatch) => {
    dispatch(selectGroomTime(time));
  };
};

export const handleSelectGroomService = (service) => {
  return (dispatch) => {
    dispatch(selectGroomService(service));
  };
};

export const handleSelectGroomPet = (pet) => {
  return (dispatch) => {
    dispatch(selectGroomPet(+pet));
  };
};

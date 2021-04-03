import * as actionTypes from "../actions/types";

const checkAvailableRoomStart = (state, action) => {
  return {
    ...state,
    availableRooms: {
      StandardRoom: [],
      LuxuryRoom: [],
    },
    error: null,
  };
};

const checkAvailableRoomSuccess = (state, action) => {
  return {
    ...state,
    availableRooms: {
      StandardRoom: action.data.StandardRoom,
      LuxuryRoom: action.data.LuxuryRoom,
    },
    error: null,
  };
};

const checkAvailableRoomFail = (state, action) => {
  return {
    ...state,
    availableRooms: [],
    error: action.error,
  };
};

const checkAvailableGroomStart = (state, action) => {
  return {
    ...state,
    availableGrooms: [],
    error: null,
  };
};

const checkAvailableGroomSuccess = (state, action) => {
  return {
    ...state,
    availableGrooms: action.data.availablePeriod,
    error: null,
  };
};

const checkAvailableGroomFail = (state, action) => {
  return {
    ...state,
    availableGrooms: [],
    error: action.error,
  };
};

const selectCheckInDate = (state, action) => {
  return {
    ...state,
    roomReservation: {
      ...state.roomReservation,
      check_in_date: action.date,
    },
  };
};

const selectCheckOutDate = (state, action) => {
  return {
    ...state,
    roomReservation: {
      ...state.roomReservation,
      check_out_date: action.date,
    },
  };
};

const selectRoom = (state, action) => {
  return {
    ...state,
    roomReservation: {
      ...state.roomReservation,
      room: action.room,
    },
  };
};

const selectHotelPet = (state, action) => {
  return {
    ...state,
    roomReservation: {
      ...state.roomReservation,
      pet: action.pet,
    },
  };
};

const selectGroomDate = (state, action) => {
  return {
    ...state,
    groomReservation: {
      ...state.groomReservation,
      date: action.date,
    },
  };
};

const selectGroomTime = (state, action) => {
  return {
    ...state,
    groomReservation: {
      ...state.groomReservation,
      time: action.time,
    },
  };
};

const selectGroomPet = (state, action) => {
  return {
    ...state,
    groomReservation: {
      ...state.groomReservation,
      pet: action.pet,
    },
  };
};

const selectGroomService = (state, action) => {
  return {
    ...state,
    groomReservation: {
      ...state.groomReservation,
      groom: action.service,
    },
  };
};

const initialState = {
  availableRooms: {
    StandardRoom: [],
    LuxuryRoom: [],
  },
  availableGrooms: [],
  roomReservation: {
    check_in_date: null,
    check_out_date: null,
    pet: null,
    room: null,
  },
  groomReservation: {
    date: null,
    time: null,
    pet: null,
    groom: null,
  },
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECK_AVAILABLE_ROOM_START:
      return checkAvailableRoomStart(state, action);
    case actionTypes.CHECK_AVAILABLE_ROOM_SUCCESS:
      return checkAvailableRoomSuccess(state, action);
    case actionTypes.CHECK_AVAILABLE_ROOM_FAIL:
      return checkAvailableRoomFail(state, action);
    case actionTypes.CHECK_AVAILABLE_GROOM_START:
      return checkAvailableGroomStart(state, action);
    case actionTypes.CHECK_AVAILABLE_GROOM_SUCCESS:
      return checkAvailableGroomSuccess(state, action);
    case actionTypes.CHECK_AVAILABLE_GROOM_FAIL:
      return checkAvailableGroomFail(state, action);
    case actionTypes.SELECT_CHECK_IN_DATE:
      return selectCheckInDate(state, action);
    case actionTypes.SELECT_CHECK_OUT_DATE:
      return selectCheckOutDate(state, action);
    case actionTypes.SELECT_ROOM:
      return selectRoom(state, action);
    case actionTypes.SELECT_PET:
      return selectHotelPet(state, action);
    case actionTypes.SELECT_GROOM_DATE:
      return selectGroomDate(state, action);
    case actionTypes.SELECT_GROOM_TIME:
      return selectGroomTime(state, action);
    case actionTypes.SELECT_GROOM_SERVICE:
      return selectGroomService(state, action);
    case actionTypes.SELECT_GROOM_PET:
      return selectGroomPet(state, action);
    default:
      return state;
  }
};

export default reducer;

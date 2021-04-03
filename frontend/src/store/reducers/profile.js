import * as actionTypes from "../actions/types";

const fetchPetsStart = (state, action) => {
  return {
    ...state,
    pets: [],
    error: null,
  };
};

const fetchPetsSuccess = (state, action) => {
  return {
    ...state,
    pets: action.data,
    error: null,
  };
};

const fetchPetsFail = (state, action) => {
  return {
    ...state,
    pets: [],
    error: action.error,
  };
};

const registerPetSuccess = (state, action) => {
  const pets = [...state.pets, action.data];
  return {
    ...state,
    pets: pets,
    error: null,
  };
};

const createHotelOrderSuccess = (state, action) => {
  const orders = [...state.hotelOrders, action.data];
  return {
    ...state,
    hotelOrders: orders,
    error: null,
  };
};

const createGroomOrderSuccess = (state, action) => {
  const orders = [...state.groomOrders, action.data];
  return {
    ...state,
    groomOrders: orders,
    error: null,
  };
};

const newAccountDetail = (state, action) => {
  return {
    ...state,
    accountDetail: {
      first_name: "",
      last_name: "",
      phone: "",
    },
    error: null,
  };
};

const fetchAccountDetailSuccess = (state, action) => {
  return {
    ...state,
    accountDetail: {
      ...state.accountDetail,
      ...action.data,
    },
    error: null,
  };
};

const updatePetSuccess = (state, action) => {
  const pets = [...state.pets];
  const updatedpet = action.data;
  const updatedpetslist = pets.map((pet) => {
    if (pet.id === updatedpet.id) {
      return {
        ...pet,
        name: updatedpet.name,
        age: updatedpet.age,
        gender: updatedpet.gender,
        breed: updatedpet.breed,
      };
    }
    return pet;
  });
  return {
    ...state,
    pets: updatedpetslist,
    error: null,
  };
};

const deletePetSuccess = (state, action) => {
  const pets = [...state.pets];
  const updatedpetslist = pets.filter((pet) => {
    if (pet.id !== action.id) {
      return pet;
    }
  });
  return {
    ...state,
    pets: updatedpetslist,
    error: null,
  };
};

const fetchHotelOrdersStart = (state, action) => {
  return {
    ...state,
    hotelOrders: [],
    error: null,
  };
};

const fetchHotelOrdersSuccess = (state, action) => {
  return {
    ...state,
    hotelOrders: action.orders,
    error: null,
  };
};

const fetchGroomOrdersStart = (state, action) => {
  return {
    ...state,
    groomOrders: [],
    error: null,
  };
};

const fetchGroomOrdersSuccess = (state, action) => {
  return {
    ...state,
    groomOrders: action.orders,
    error: null,
  };
};

const cancelHotelOrderSuccess = (state, action) => {
  const orders = [...state.hotelOrders];
  const updatedOrders = orders.map((order) => {
    if (order.id === action.id) {
      return {
        ...order,
        status: 2,
      };
    } else {
      return order;
    }
  });
  return {
    ...state,
    hotelOrders: updatedOrders,
    error: null,
  };
};

const cancelGroomOrderSuccess = (state, action) => {
  const orders = [...state.groomOrders];
  const updatedOrders = orders.map((order) => {
    if (order.id === action.id) {
      return {
        ...order,
        status: 2,
      };
    } else {
      return order;
    }
  });
  return {
    ...state,
    groomOrders: updatedOrders,
    error: null,
  };
};

const initialState = {
  accountDetail: {
    first_name: "",
    last_name: "",
    phone: "",
  },
  hotelOrders: [],
  groomOrders: [],
  pets: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PETS_START:
      return fetchPetsStart(state, action);
    case actionTypes.FETCH_PETS_SUCCESS:
      return fetchPetsSuccess(state, action);
    case actionTypes.FETCH_PETS_FAIL:
      return fetchPetsFail(state, action);
    case actionTypes.REGISTER_PET_SUCCESS:
      return registerPetSuccess(state, action);
    case actionTypes.CREATE_HOTEL_ORDER_SUCCESS:
      return createHotelOrderSuccess(state, action);
    case actionTypes.CREATE_GROOM_ORDER_SUCCESS:
      return createGroomOrderSuccess(state, action);
    case actionTypes.NEW_ACCOUNT_DETAIL:
      return newAccountDetail(state, action);
    case actionTypes.FETCH_ACCOUNT_DETAIL_SUCCESS:
      return fetchAccountDetailSuccess(state, action);
    case actionTypes.UPDATE_PET_SUCCESS:
      return updatePetSuccess(state, action);
    case actionTypes.DELETE_PET_SUCCESS:
      return deletePetSuccess(state, action);
    case actionTypes.FETCH_HOTEL_ORDERS_START:
      return fetchHotelOrdersStart(state, action);
    case actionTypes.FETCH_HOTEL_ORDERS_SUCCESS:
      return fetchHotelOrdersSuccess(state, action);
    case actionTypes.CANCEL_HOTEL_ORDER_SUCCESS:
      return cancelHotelOrderSuccess(state, action);
    case actionTypes.FETCH_GROOM_ORDERS_START:
      return fetchGroomOrdersStart(state, action);
    case actionTypes.FETCH_GROOM_ORDERS_SUCCESS:
      return fetchGroomOrdersSuccess(state, action);
    case actionTypes.CANCEL_GROOM_ORDER_SUCCESS:
      return cancelGroomOrderSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;

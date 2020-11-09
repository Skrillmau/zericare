import * as actionTypes from "../Actions/actionTypes";
import updateObject from "./utils";
const initialState = {
  user: {
    Historias: {},
    Pacientes: {},
  },
};

const getUser = (state, action) => {
  const { payload } = action;
  return updateObject(state, {
    ...payload,
  });
};
const addUser = (state, action) => {
  const { payload } = action;
  const { user, userid } = payload;
  const newState = {
    ...state,
    user: {
      ...state.user,
    },
  };
  newState.user.Pacientes[userid]=user;
  console.log(state);
  console.log(newState);
  return updateObject(state, {
    ...newState,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return getUser(state, action);
    case actionTypes.ADD_USER:
      return addUser(state, action);
    default:
      return state;
  }
};

export default reducer;

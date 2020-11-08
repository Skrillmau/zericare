import * as actionTypes from "../Actions/actionTypes";
import updateObject from "./utils";
const initialState = {};

const getUser = (state, action) => {
  const { payload } = action;
  return updateObject(state, {
    ...payload,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return getUser(state, action);

    default:
      return state;
  }
};

export default reducer;

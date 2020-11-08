import * as actionTypes from "../actions/actionTypes";
import updateObject from "./utils";

const initialState = {
  isUserLoggedIn: false,
  userLoggedIn: {
    userName: "",
    idToken: "",
    localId: "",
    userType: "",
  },
  loadingAuth: false,
};
const logOut = (state, action) => {
  return updateObject(state, {
    isUserLoggedIn: false,
    userLoggedIn: {
      userName: "",
      idToken: "",
      localId: "",
      userType:""
    },
  });
};
const login = (state, action) => {
  const { payload } = action;
  return updateObject(state, {
    isUserLoggedIn: true,
    userLoggedIn: {
      userName: payload.userName,
      idToken: payload.idToken,
      localId: payload.localId,
      userType: payload.userType,
    },
  });
};
const startLoading = (state, action) => {
  return updateObject(state, { loadingAuth: true });
};

const endLoading = (state, action) => {
  return updateObject(state, { loadingAuth: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return login(state, action);
    //case actionTypes.SIGN_UP: return signUp(state, action);
    case actionTypes.LOG_OUT:
      return logOut(state, action);
    case actionTypes.START_LOADING_AUTH:
      return startLoading(state, action);
    case actionTypes.END_LOADING_AUTH:
      return endLoading(state, action);
    default:
      return state;
  }
};

export default reducer;

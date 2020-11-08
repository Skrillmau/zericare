import * as actionTypes from "../Actions/actionTypes";
import updateObject from "./utils";

const initialState = {
  isUserLoggedIn: false,
  user: {
    userName: "",
    idToken: "",
    uid: "",
  },
  loadingAuth: false,
};
const logOut = (state, action) => {
  return updateObject(state, {
    isUserLoggedIn: false,
    user: {
      userName: "",
      idToken: "",
      uid: "",
    },
  });
};
const login = (state, action) => {
  const { payload } = action;
  return updateObject(state, {
    isUserLoggedIn: true,
    user: {
      userName: payload.userName,
      idToken: payload.idToken,
      uid: payload.uid,
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

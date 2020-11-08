import * as actionTypes from "./actionTypes";
import firebase from "../../config/firebase";
import * as errors from "../Actions/error";
import * as users from "../Actions/user";

const startAuthLoading = () => {
  return {
    type: actionTypes.START_LOADING_AUTH,
  };
};

const endAuthLoading = () => {
  return {
    type: actionTypes.END_LOADING_AUTH,
  };
};

const saveSession = (userName, token, uid) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      userName: userName,
      idToken: token,
      uid: uid,
    },
  };
};
const cerrarSesion = () => {
  return {
    type: actionTypes.LOG_OUT,
  };
};
/*const saveSignUp = (userName, token, localId) => {
  return {
    type: actionTypes.SIGN_UP,
    payload: {
      userName: userName,
      idToken: token,
      localId: localId,
    },
  };
};*/
export const logIn = (authData, onSuccessCallback) => {
  return (dispatch) => {
    dispatch(startAuthLoading());
    console.log(authData);
    const { email, password } = authData;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (result) {
        const uid = result.user.uid;
        const token = result.user.ya;
        let userSession = {
          token,
          email,
          uid,
        };
        userSession = JSON.stringify(userSession);
        localStorage.setItem("userSession", userSession);
        dispatch(saveSession(email, token, uid));
        dispatch(endAuthLoading());
        if (onSuccessCallback) {
          onSuccessCallback();
        }
      })
      .catch(function (error) {
        // Handle Errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        dispatch(errors.saveError(errorMessage));
        dispatch(endAuthLoading());
      });
  };
};
export const logOut = () => {
  return (dispatch) => {
    
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log("logout");
        localStorage.removeItem("userSession");
        dispatch(cerrarSesion());
      })
      .catch(function (error) {
        // An error happened.
        const errorMessage = error.message;
        console.log(errorMessage);
        dispatch(errors.saveError(errorMessage));
      });
  };
};
export const persistAuthentication = () => {
  return (dispatch) => {
    let userSession = localStorage.getItem("userSession");

    if (!userSession) {
      dispatch(logOut());
    } else {
      userSession = JSON.parse(userSession);

      dispatch(
        saveSession(userSession.email, userSession.token, userSession.uid)
      );
    }
  };
};

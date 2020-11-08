import * as actionTypes from "./actionTypes";
import firebase from '../../config/firebase';

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

  const saveSession = (userName, token, localId,userType) => {
    return {
      type: actionTypes.LOGIN,
      payload: {
        userName: userName,
        idToken: token,
        localId: localId,
        userType 
      },
    };
  };

  const saveSignUp = (userName, token, localId) => {
    return {
      type: actionTypes.SIGN_UP,
      payload: {
        userName: userName,
        idToken: token,
        localId: localId,
      },
    };
  };
export const logIn = (authData, onSuccessCallback) => {
    return (dispatch) => {
      dispatch(startAuthLoading());
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
      axios
        .post("/accounts:signInWithPassword?key=" + API_KEY, authData)
        .then((response) => {
          const userEmail = authData.email;
          const token = response.data.idToken;
          const localId = response.data.localId;
          let userSession = {
            token,
            userEmail,
            localId,
          };
  
          userSession = JSON.stringify(userSession);
  
          console.log(response);
  
          localStorage.setItem("userSession", userSession);
  
          dispatch(saveSession(userEmail, token, localId));
          dispatch(endAuthLoading());
  
          if (onSuccessCallback) {
            onSuccessCallback();
          }
        })
        .catch((error) => {
          console.log(error);
          const lowerCaseerror = error.response.data.error.message.toLowerCase();
          const parsedError = lowerCaseerror.replace('_',' ');
          dispatch(errors.saveError(parsedError));
          dispatch(endAuthLoading());
        });
    };
  };
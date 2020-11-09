import * as actionTypes from "./actionTypes";
import { Firebase, auxFirebase } from "../../config/firebase";
import * as errors from "../Actions/error";
import * as users from "../Actions/user";
const storage = Firebase.storage();
const database = Firebase.database();

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

const saveSession = (userName, token, uid, tipo) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      userName: userName,
      idToken: token,
      uid: uid,
      tipo: tipo,
    },
  };
};
const cerrarSesion = () => {
  return {
    type: actionTypes.LOG_OUT,
  };
};

export const Register = (user, uid, image) => {
  return (dispatch) => {
    auxFirebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(function (response) {
        var storageRef = storage.ref();
        const IdUser = response.user.uid;
        var imagesRef = storageRef.child(`images/${IdUser}/${image.name}`);

        imagesRef.put(image).then(async function (snapshot) {
          const imgUrl = await snapshot.ref.getDownloadURL();
          const newUser = {
            ...user,
            doctor: uid,
            imagen: imgUrl,
          };
          dispatch(users.addPaciente(newUser, IdUser, uid));
          auxFirebase.auth().signOut();
        });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        dispatch(errors.saveError(errorMessage));
      });
  };
};

export const logIn = (authData, onSuccessCallback) => {
  return (dispatch) => {
    dispatch(startAuthLoading());
    const { email, password } = authData;
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (result) {
        const uid = result.user.uid;
        const token = result.user.ya;
        dispatch(users.fetchUser(uid));
        var ref = database.ref(`Users/${uid}/tipo`);
        ref.once(
          "value",
          function (snapshot) {
            let userSession = {
              token,
              email,
              uid,
              tipo: snapshot.val(),
            };
            userSession = JSON.stringify(userSession);
            localStorage.setItem("userSession", userSession);
            dispatch(saveSession(email, token, uid, snapshot.val()));
            dispatch(endAuthLoading());
            if (onSuccessCallback) {
              onSuccessCallback();
            }
          },
          function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          }
        );
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
    Firebase.auth()
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
        saveSession(
          userSession.email,
          userSession.token,
          userSession.uid,
          userSession.tipo
        )
      );
    }
  };
};

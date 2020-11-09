import * as actionTypes from "./actionTypes";
import { Firebase } from "../../config/firebase";

const database = Firebase.database();
const getUser = (user) => {
  return {
    type: actionTypes.GET_USER,
    payload: {
      user,
    },
  };
};
const addUser = (user) => {
  return {
    type: actionTypes.ADD_USER,
    payload: {
      user,
    },
  };
};

export const fetchUser = (uid) => {
  return (dispatch) => {
    console.log("fetch");
    var ref = database.ref(`Users/${uid}`);
    let user = {
      uid,
    };
    ref.once(
      "value",
      function (snapshot) {
        user = {
          ...user,
          ...snapshot.val(),
        };
        dispatch(getUser(user));
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
  };
};

export const addPaciente = (user, userid, uid) => {
  return (dispatch) => {
    try {
      database.ref(`Users/${userid}`).set(user);
      database.ref(`Users/${uid}/Pacientes/${userid}`).set(user);
    } catch (error) {
      console.log(error);
    }
  };
};

export const addHistoria = (historia, userid) => {
  return (dispatch) => {
    database.ref(`Users/${userid}/Historias/${historia.fecha}`).set(historia);
  };
};

export const addRecipe = (recipe, userid) => {
  return (dispatch) => {
    database
      .ref(`Users/${userid}/Ordenes/${recipe.fecha}`)
      .set(recipe);
  };
};

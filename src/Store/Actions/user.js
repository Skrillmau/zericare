import * as actionTypes from "./actionTypes";
import firebase from "../../config/firebase";

const database = firebase.database();
const getUser = (user) => {
  return {
    type: actionTypes.GET_USER,
    payload: {
      user,
    },
  };
};
const addUser =()=>{
  return{
    type: actionTypes.ADD_USER,
    payload:{
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

export const addPaciente = (user, userid, uid) =>{
  return (dispatch) =>{

    database.ref('Users/'+userid).set(user);
    database.ref('Users/'+uid+'/Pacientes'+userid).set(user);
     

  };
}

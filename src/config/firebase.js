import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCMR_Ltjhuc7zx225q_y8xyLkhwZJsvVu0",
    authDomain: "zericare.firebaseapp.com",
    databaseURL: "https://zericare.firebaseio.com",
    projectId: "zericare",
    storageBucket: "zericare.appspot.com",
    messagingSenderId: "486357078280",
    appId: "1:486357078280:web:fcf922ca7d2bd2846d5cbd"
  };


firebase.initializeApp(firebaseConfig);
export default firebase;
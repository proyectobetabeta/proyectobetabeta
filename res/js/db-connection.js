/**/
const firebaseConfig = {
    apiKey: "AIzaSyBlBFboiCJ0FVAQc0dbxiB98ZF2rCytrN4",
    authDomain: "proyectonevado.firebaseapp.com",
    databaseURL: "https://proyectonevado.firebaseio.com",
    projectId: "proyectonevado",
    storageBucket: "",
    messagingSenderId: "576032993041",
    appId: "1:576032993041:web:0f6c087dfc28058b"
  };
 //*/
 /*/
 var config = {
     apiKey: "AIzaSyAC-ZazGCk0zrEw0YKn1W_Pdb8qUxgPNLs",
     authDomain: "mytest-ac084.firebaseapp.com",
     databaseURL: "https://mytest-ac084.firebaseio.com",
     storageBucket: "mytest-ac084.appspot.com",
     messagingSenderId: "84775077704"
 };
 //*/
 firebase.initializeApp(firebaseConfig);
 var db = firebase.database();
 var storageRef = firebase.storage().ref();
import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBsXvd0_LNI_mARvBZ-T4aFu5bGCnXsPrM",
    authDomain: "mead-todo-app-6d4fd.firebaseapp.com",
    databaseURL: "https://mead-todo-app-6d4fd.firebaseio.com",
    storageBucket: "mead-todo-app-6d4fd.appspot.com",
  };

  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;

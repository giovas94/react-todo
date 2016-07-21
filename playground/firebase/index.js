import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBsXvd0_LNI_mARvBZ-T4aFu5bGCnXsPrM",
  authDomain: "mead-todo-app-6d4fd.firebaseapp.com",
  databaseURL: "https://mead-todo-app-6d4fd.firebaseio.com",
  storageBucket: "mead-todo-app-6d4fd.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Giovanny',
    age: 22
  }
});
//
// var notesRef = firebaseRef.child('notes');
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!!'
// });

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});

import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCB9n4qKAbKZHZ_8lWoLHK6uG-gUJYcqWM",
    authDomain: "src-aucc.firebaseapp.com",
    projectId: "src-aucc",
    storageBucket: "src-aucc.appspot.com",
    messagingSenderId: "220338343333",
    appId: "1:220338343333:web:bbe0be4129bbf6b7ae2c4c"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage()

  export {
      storage, firebase as default
  }
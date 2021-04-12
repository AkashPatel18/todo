import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDgHRPn65HI8t0ylnBITqvPxjA2EXrXR2M",
    authDomain: "todoapp-312ef.firebaseapp.com",
    projectId: "todoapp-312ef",
    storageBucket: "todoapp-312ef.appspot.com",
    messagingSenderId: "1017786580328",
    appId: "1:1017786580328:web:80cc29bd2930d211e02add"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };

import firebase from "firebase";

var firebaseConfig = {
    ///add key
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };

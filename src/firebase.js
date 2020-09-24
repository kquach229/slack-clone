import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo4sbsq5Uq5iA7HUGtUbNPiUXjRO-cKMo",
  authDomain: "smack-95e91.firebaseapp.com",
  databaseURL: "https://smack-95e91.firebaseio.com",
  projectId: "smack-95e91",
  storageBucket: "smack-95e91.appspot.com",
  messagingSenderId: "993982807944",
  appId: "1:993982807944:web:bc113b0db0def8ee7f043d",
  measurementId: "G-M4G0XFBLSF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

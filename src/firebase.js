// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3xeEZhyn4HMALoIrzGbw2x_NrZOeCbJk",
  authDomain: "clone-2663b.firebaseapp.com",
  databaseURL: "https://clone-2663b.firebaseio.com",
  projectId: "clone-2663b",
  storageBucket: "clone-2663b.appspot.com",
  messagingSenderId: "898489013213",
  appId: "1:898489013213:web:70392a36a140f94af75c34",
  measurementId: "G-8PVWR7SCY7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOegx7jDBD_CMgc0fzuZrQDqEib50_hCk",
  authDomain: "food-c7ce3.firebaseapp.com",
  projectId: "food-c7ce3",
  storageBucket: "food-c7ce3.appspot.com",
  messagingSenderId: "29381813118",
  appId: "1:29381813118:web:66a96fbb36e617ae38892f",
  measurementId: "G-L3W3GT4KQR",
};

firebase.initializeApp(firebaseConfig);

export { firebase };

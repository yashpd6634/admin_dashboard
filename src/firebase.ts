import firebase from "firebase/compat/app";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB1oQ__7Fke6CV-oSz_cL9560-_pIQN4LE",
  authDomain: "a-z-entertainment.firebaseapp.com",
  projectId: "a-z-entertainment",
  storageBucket: "a-z-entertainment.appspot.com",
  messagingSenderId: "339558839327",
  appId: "1:339558839327:web:d698cb99b22a70ecf2912a",
  measurementId: "G-23GF95ZMQ2",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
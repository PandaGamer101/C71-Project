import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCFjiM7MHdDrT44JQ7rQtt2hBv0lASv3Wo",
    authDomain: "elibraryapp-158c5.firebaseapp.com",
    projectId: "elibraryapp-158c5",
    storageBucket: "elibraryapp-158c5.appspot.com",
    messagingSenderId: "646003090156",
    appId: "1:646003090156:web:21b80e9896bcfd312b3bc9"
  };

  
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

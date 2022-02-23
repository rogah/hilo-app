// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwzNZ0Y94VcFUVXcaswPo3BaTZvlvETJ4",
    authDomain: "hilo-6750f.firebaseapp.com",
    projectId: "hilo-6750f",
    storageBucket: "hilo-6750f.appspot.com",
    messagingSenderId: "811000354654",
    appId: "1:811000354654:web:aa300a88c652333fe3e1cf",
    measurementId: "G-54JR6LQ4H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
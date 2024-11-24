 
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";



const firebaseConfig = {
    apiKey: "AIzaSyD_tWKzGTG1O1TucmxeFTV9jSDDxkvak60",
    authDomain: "netflix-ab566.firebaseapp.com",
    projectId: "netflix-ab566",
    storageBucket: "netflix-ab566.appspot.com",
    messagingSenderId: "89906422787",
    appId: "1:89906422787:web:c533f1012faafe1f661a36"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;
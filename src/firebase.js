import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdRXc0ZWdtwMuq-eP3GeDT0_X6aCojf_8",
  authDomain: "disney-plus-clone-65857.firebaseapp.com",
  projectId: "disney-plus-clone-65857",
  storageBucket: "disney-plus-clone-65857.appspot.com",
  messagingSenderId: "564761131199",
  appId: "1:564761131199:web:9faed044a8833ddcfc2e0a",
  measurementId: "G-68EF8F549L"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();
const analytics = getAnalytics(app);


export { auth, provider, storage };
export default db;
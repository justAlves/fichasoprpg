// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3fvuzYSINLaHealN-mwm6uRxYeyp7E7I",
  authDomain: "fichasoprpg.firebaseapp.com",
  projectId: "fichasoprpg",
  storageBucket: "fichasoprpg.appspot.com",
  messagingSenderId: "474804625203",
  appId: "1:474804625203:web:9944fd4ba2608573776846",
  measurementId: "G-ESRLR00VBT"
};

if(!getApps().length) {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}

export default firebaseConfig;

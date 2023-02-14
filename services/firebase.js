import firebase from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD4V_JbLCYpxx6FdUHO6V7Tjwa2XncCm44",
    authDomain: "technuff-8f0d2.firebaseapp.com",
    projectId: "technuff-8f0d2",
    storageBucket: "technuff-8f0d2.appspot.com",
    messagingSenderId: "936402722300",
    appId: "1:936402722300:web:82d20e550e3a9f83746679",
    measurementId: "G-H937X6R18Y"
};

export default function initFirebase () {
    if ( !firebase.getApps.length ) {
        const app = firebase.initializeApp( config );
        const analytics = getAnalytics( app );
    }
}
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAkATNZKTvo4-6tuhlHKbTNonm9swc0W8M",
    authDomain: "civic-rhythm-278304.firebaseapp.com",
    databaseURL: "https://civic-rhythm-278304.firebaseio.com",
    projectId: "civic-rhythm-278304",
    storageBucket: "civic-rhythm-278304.appspot.com",
    messagingSenderId: "841675214277",
    appId: "1:841675214277:web:d020bd1ebff2cf85b9cfac",
    measurementId: "G-KC1VFK910K"
}

firebase.initializaApp(config);

export const auth1 = firebase.auth()

export const firestore1 = firebase.firestore();


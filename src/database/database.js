import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA-0T74mE4Dipq3B0u4pI6SHCK3TaLk4oQ",
    authDomain: "message-f7703.firebaseapp.com",
    databaseURL: "https://message-f7703.firebaseio.com",
    projectId: "message-f7703",
    storageBucket: "message-f7703.appspot.com",
    messagingSenderId: "200947367578",
    appId: "1:200947367578:web:56c01f8d3bd7776c462923",
    measurementId: "G-Z138JMPVB2",
}


firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
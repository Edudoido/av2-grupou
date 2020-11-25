import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCARP6xzIOKsE68vzCGm25o2-zEQcbV-FA",
  authDomain: "grupou-4a8d3.firebaseapp.com",
  databaseURL: "https://grupou-4a8d3.firebaseio.com",
  projectId: "grupou-4a8d3",
  storageBucket: "grupou-4a8d3.appspot.com",
  messagingSenderId: "717951297236",
  appId: "1:717951297236:web:14a517e750261e492b7d41"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
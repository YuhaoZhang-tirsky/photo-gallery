import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDFDhOKoVVcDX5mal16FdcRTp2Cu3wQc-s",
  authDomain: "photo-gallery-1372e.firebaseapp.com",
  databaseURL: "https://photo-gallery-1372e.firebaseio.com",
  projectId: "photo-gallery-1372e",
  storageBucket: "photo-gallery-1372e.appspot.com",
  messagingSenderId: "783714359479",
  appId: "1:783714359479:web:5690eaff3e611560f55532"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp };
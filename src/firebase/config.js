import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAuvew0CQkX5imSMDjF6yGAZkBbzpelamw",
  authDomain: "projectmanagement-d7dc4.firebaseapp.com",
  projectId: "projectmanagement-d7dc4",
  storageBucket: "projectmanagement-d7dc4.appspot.com",
  messagingSenderId: "892433894047",
  appId: "1:892433894047:web:5abb7f57cfdbc037bfb0aa"
};

//init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
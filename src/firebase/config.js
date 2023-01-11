import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBpXZfaEmcSKYJSlxzNJQtvAykRzphnAes",
    authDomain: "afro-recipes-site.firebaseapp.com",
    projectId: "afro-recipes-site",
    storageBucket: "afro-recipes-site.appspot.com",
    messagingSenderId: "349749227494",
    appId: "1:349749227494:web:ba0df987e33553c8dbf027"
  }

// init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore }
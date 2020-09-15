import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDXBQ2rbDUAvVH1Rn37zkkhCNuCQavcGZo",
    authDomain: "clone-3f8c7.firebaseapp.com",
    databaseURL: "https://clone-3f8c7.firebaseio.com",
    projectId: "clone-3f8c7",
    storageBucket: "clone-3f8c7.appspot.com",
    messagingSenderId: "169052016718",
    appId: "1:169052016718:web:278e949d3cc095f402f31f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }

  export default db
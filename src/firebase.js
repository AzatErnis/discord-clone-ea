import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDutoLR8gU9JlSncO5Dgz8LMvEzJvuJ-48",
  authDomain: "discord-clone-ae.firebaseapp.com",
  databaseURL: "https://discord-clone-ae.firebaseio.com",
  projectId: "discord-clone-ae",
  storageBucket: "discord-clone-ae.appspot.com",
  messagingSenderId: "1074636236163",
  appId: "1:1074636236163:web:d331aae867461e0d1642b6"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
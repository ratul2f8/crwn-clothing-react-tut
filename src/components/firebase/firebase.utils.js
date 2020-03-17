import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCFaeopGqYXa1oekigSg_0e6UoTOJZL2zI",
    authDomain: "crwn-clothing-react-tut.firebaseapp.com",
    databaseURL: "https://crwn-clothing-react-tut.firebaseio.com",
    projectId: "crwn-clothing-react-tut",
    storageBucket: "crwn-clothing-react-tut.appspot.com",
    messagingSenderId: "1025624417468",
    appId: "1:1025624417468:web:3b27c94f90ae50bb995cb9",
    measurementId: "G-LH0986655E"
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const userAuthDocument = async( userAuth, additionalData) => {
    if(!userAuth) return
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    if(!snapshot.exists){
        const { displayName,email } = userAuth
        const createdAt = new Date().toLocaleString()
        try{
          await userRef.set(
              {
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              }
          )
        }catch(error){
            console.log('error happened :');
            console.log(error.message);
        }
    }
    return userRef
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({'prompt' : 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
  
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyCFaeopGqYXa1oekigSg_0e6UoTOJZL2zI",
    authDomain: "crwn-clothing-react-tut.firebaseapp.com",
    databaseURL: "https://crwn-clothing-react-tut.firebaseio.com",
    projectId: "crwn-clothing-react-tut",
    storageBucket: "crwn-clothing-react-tut.appspot.com",
    messagingSenderId: "1025624417468",
    appId: "1:1025624417468:web:3b27c94f90ae50bb995cb9",
    measurementId: "G-LH0986655E"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(
    doc => {
       const { title, items} = doc.data()
       return{
         routeName : encodeURI(title.toLowerCase()),
         id : doc.id,
         title,
         items
       }
    }
  )

  return transformedCollection.reduce((accumulator, collection) =>{
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  },
  {})
}

export default firebase;

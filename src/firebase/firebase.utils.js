import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAs_pMQHeslcL3OvXRf5Ewg6t0UUBsZevc",
  authDomain: "crwn-db-5a7c1.firebaseapp.com",
  projectId: "crwn-db-5a7c1",
  storageBucket: "crwn-db-5a7c1.appspot.com",
  messagingSenderId: "417903633271",
  appId: "1:417903633271:web:ceb20004c859bac1b97772",
  measurementId: "G-Q52QW1ZTCL"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalInfo) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();
  console.log('userAuth', userAuth );
  
  
  if(!userSnapshot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
    } catch (error) {
      console.log('There was an error during creating a user', error.message);
      
    }
  }

  return userRef;
};
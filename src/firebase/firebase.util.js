import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import secretKey from '../config/secret';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: secretKey.apiKey,
    authDomain: secretKey.authDomain,
    databaseURL: secretKey.databaseUrl,
    projectId: "crowndb-1ea41",
    storageBucket: "",
    messagingSenderId: "288964052414",
    appId: secretKey.appId,
    measurementId: "G-PQ8FFZ2RE1"
  };


  export const createUserProfileDocument = async (userAuth, additionalDate )=>{

    if(!userAuth) return;
      
    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.delete();
 
   if(!snapShot.exists) {
      const {dispayName, email} = userAuth;
      const createdAt = new Date();


      try {
          await userRef.set({
            dispayName,
            email, 
            createdAt, 
            ...additionalDate
          })
      } catch (error) {
        console.log('error creating user', error.message);
      }
   }

   return userRef;

   
  }


  firebase.initializeApp(firebaseConfig);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  

  export default firebase;
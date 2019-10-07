import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import secret from '../config/secret';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: secret.apiKey,
    authDomain: "crown-db-15c5c.firebaseapp.com",
    databaseURL: "https://crown-db-15c5c.firebaseio.com",
    projectId: "crown-db-15c5c",
    storageBucket: "",
    messagingSenderId: "842854913631",
    appId: secret.appId
  };

  export const createUserProfileDocument = async (userAuth, additionalDate )=>{

    if(!userAuth) return;
    
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    // console.log(userRef)

    const snapShot = await userRef.get();
    // console.log(snapShot);
 
   if(snapShot.exists === false)  {

      const {displayName, email} = userAuth;
      const createdAt = new Date();


      try {
          await userRef.set({
            displayName,
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
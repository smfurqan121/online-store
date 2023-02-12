// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhC-vts5n94TOD9izN453NIPKuKoZak58",
  authDomain: "final-hackaton-7b4dd.firebaseapp.com",
  projectId: "final-hackaton-7b4dd",
  storageBucket: "final-hackaton-7b4dd.appspot.com",
  messagingSenderId: "432962310466",
  appId: "1:432962310466:web:b03cc143db7abfc8dcb8db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("application",app)
const auth = getAuth(app)
const db = getFirestore(app)





async function signUpFirebase(userInfo) {
  const { email, password } = userInfo;
  //=================call the firebase built in function to import line No #4
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  
  await addUserToDb(userInfo, userCredential.user.uid)

  console.log("user==>",userCredential)
  console.log("userID ===", userCredential.user.uid);
  //=================call the function to make the blew
//   await addUserToDb(userInfo, userCredential.user.uid, imageurl);
}

function addUserToDb(userInfo, uid) {
  const { username, email,contact } = userInfo;
  //call the firebase built in function to import the line No #4
  return setDoc(doc(db, "users", uid), { username, email, contact});
}

async function signInFirebase(email,password){
  const user = await signInWithEmailAndPassword(auth,email,password)
  // console.log("user",user)
  return user
  // alert("Login Successfully")
}

export {signUpFirebase,signInFirebase}
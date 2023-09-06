import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import {onAuthStateChanged} from 'firebase/auth';

import './App.css'
import PhoneAuth from './PhoneAuth';

function App() {

const firebaseConfig = {
  apiKey: "AIzaSyDUditoyJ2eKQXBHdLt6qUhcGfH9zsPuro",
  authDomain: "read-write-9afa4.firebaseapp.com",
  databaseURL: "https://read-write-9afa4-default-rtdb.firebaseio.com",
  projectId: "read-write-9afa4",
  storageBucket: "read-write-9afa4.appspot.com",
  messagingSenderId: "840266526710",
  appId: "1:840266526710:web:d3685f9f721de92d9a61d7",
  measurementId: "G-7PY3QHN3T3"
};

firebase.initializeApp(firebaseConfig);

 const [user,setUser] = useState(null);

 useEffect(()=>{
  const unRegistered = onAuthStateChanged(firebase.auth(), (currentUser)=>{
    console.log(currentUser);
    setUser(currentUser);
  })
  return ()=>unRegistered();
 });

  return (
    
      <div>
        <h2>Phone Number Authentication</h2>
        <PhoneAuth auth={firebase.auth()}></PhoneAuth>
        </div>
  )
}

export default App

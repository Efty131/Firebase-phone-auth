import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const PhoneAuth = (props) => {
    useEffect(()=>{
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth);
        ui.start('.phone-auth-container', {
            signInOptions: [
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
              ],
              signInSuccessUrl: "https://web.programming-hero.com/home/level2/",
              privacyPolicyUrl: '/'
        })
    })
  return (
    <div className='phone-auth-container'>
        
    </div>
  )
}

export default PhoneAuth;
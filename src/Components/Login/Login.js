import React, { useContext, useState } from 'react';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import '../../App.css'

const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const  history = useHistory();
    const  location = useLocation();
    const  { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    const  provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn =()=>{
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const {displayName,email} = res.user;
            const signedInUser={name:displayName,email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            console.log(res);
        })
        .catch(function(error) {
            console.log(error);
            });
    }
    return (
        <>
            <div className="login">
                <h2>login with</h2>
            <button onClick={handleSignIn}>continue with google</button>
            <p>already have account</p>
            </div>
        </>
    );
};

export default Login;
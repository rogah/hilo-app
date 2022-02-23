import React from 'react';
import type { NextPage } from 'next';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; 

import { firebaseApp } from '../firebase';

const uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

const signIn: NextPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth(firebaseApp)} />
        </div>
    );
};

export default signIn;

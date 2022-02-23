import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";

import { firebaseApp } from '../firebase';

const Home: NextPage = () => {
  const [user, isLoading, error] = useAuthState(getAuth(firebaseApp));

  useEffect(() => {
    console.log('User:', user, isLoading);
  }, [user, isLoading]);

  return (
    <div>Hilo</div>
  )
};

export default Home;

import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log('User UID:', user.uid);
      } else {
        // User is signed out
        console.log('User is logged out');
        navigate('/'); // Redirect to the home or login page
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to Midpoint!</h1>
    </div>
  );
};

export default Home;

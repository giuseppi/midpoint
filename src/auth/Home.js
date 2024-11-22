import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MapComponent from '../components/MapComponent'; // Import the map component
import { auth } from '../firebase';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User UID:', user.uid);
      } else {
        console.log('User is logged out');
        navigate('/'); // Redirect to the login page
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to Midpoint!</h1>
      <MapComponent /> {/* Display the map */}
    </div>
  );
};

export default Home;

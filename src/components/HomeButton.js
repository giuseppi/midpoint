import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import your Firebase auth instance

const BackButton = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check the user's authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user); // Update the state based on user presence
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  const handleNavigation = () => {
    if (isAuthenticated) {
      navigate('/home'); // Redirect to /home if authenticated
    } else {
      navigate('/'); // Redirect to / if not authenticated
    }
  };

  return (
    <div
      style={styles.logoContainer}
      onClick={handleNavigation}
    >
      <img
        src="/midpoint_logo.png"
        alt="Logo"
        style={styles.logo}
      />
    </div>
  );
};

export default BackButton;

const styles = {
  logoContainer: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    cursor: 'pointer',
  },
  logo: {
    width: '30px', // Adjust size as needed
    height: '30px', // Maintain aspect ratio
    borderRadius: '15%',
  },
};

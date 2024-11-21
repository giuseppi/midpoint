import { onAuthStateChanged, signOut } from 'firebase/auth';
import { default as React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
        console.log('Signed out successfully');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log('uid', uid);
      } else {
        // User is signed out
        // ...
        console.log('user is logged out');
      }
    });
  }, []);

  return (
    <>
      <div style={styles.homeContainer}>
        <h1 style={styles.homeHeader}>Home</h1>

        <div>
          <button
            style={styles.logoutButton}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

const styles = {
  homeContainer: {
    textAlign: 'center',
    marginTop: '50px',
  },

  homeHeader: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },

  logoutButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    backgroundColor: '#005f73',
  },
};

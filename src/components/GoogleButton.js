import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';

const GoogleLoginButton = ({ style }) => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // User successfully signed in with Google
        navigate('/home');
        console.log('Google Login Successful:', result.user);
      })
      .catch((error) => {
        console.error('Error during Google Login:', error.message);
      });
  };

  return (
    <button
      style={{
        ...style,
        display: 'flex', // Ensures content inside the button is flex-aligned
        alignItems: 'center', // Vertically aligns items
        justifyContent: 'center', // Centers content horizontally
      }}
      onClick={handleGoogleLogin}
    >
      Login with Google
      <img
        src="/google_icon.png"
        alt="Google Icon"
        style={{
          height: '30px',
          width: '30px',
          marginLeft: '5px', // Add spacing between icon and text
          verticalAlign: 'middle',
        }}
      />
    </button>
  );
};

export default GoogleLoginButton;

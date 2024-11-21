import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div
      style={styles.logoContainer}
      onClick={() => navigate('/')}
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

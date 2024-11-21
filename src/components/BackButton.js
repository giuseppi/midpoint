import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      style={styles.backButton}
    >
      <FontAwesomeIcon
        icon={faCircleLeft}
        style={styles.icon}
      />{' '}
      Back
    </button>
  );
};

const styles = {
  backButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'darkgrey',
    fontSize: '1rem',
    cursor: 'pointer',
    marginBottom: '10px',
    textDecoration: 'none',
    padding: '5px 0',
  },
  icon: {
    marginRight: '5px', // Adds space between the icon and text
  },
};

export default BackButton;

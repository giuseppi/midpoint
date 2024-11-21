import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to Midpoint!</h2>
      <button
        onClick={() => navigate('/signup')}
        style={{ marginRight: '10px', padding: '10px 20px' }}
      >
        Sign Up
      </button>
      <button
        onClick={() => navigate('/login')}
        style={{ padding: '10px 20px' }}
      >
        Log In
      </button>
    </div>
  );
};

export default Home;

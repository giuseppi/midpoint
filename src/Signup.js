import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Signup form submitted');
    // Add signup logic here
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {/* Redirect to Login button */}
      <button
        onClick={() => navigate('/login')}
        style={{ marginTop: '10px' }}
      >
        Already have an account? Log in
      </button>
    </div>
  );
};

export default Signup;

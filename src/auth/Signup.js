import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { auth } from '../firebase';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/home'); // Navigate to home page
      })
      .catch((err) => {
        setError(err.message); // Display error message to the user
      });
  };

  return (
    <div className="container">
      <BackButton />
      <h2 style={styles.header}>Sign Up</h2>
      <form
        onSubmit={onSignup}
        style={styles.form}
      >
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button
          type="submit"
          style={styles.button}
        >
          Sign Up
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
      <p style={styles.text}>
        Already have an account?{' '}
        <NavLink
          to="/login"
          style={styles.link}
        >
          Log in
        </NavLink>
      </p>
    </div>
  );
};

export default Signup;

const styles = {
  header: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    textAlign: 'left',
  },
  label: {
    fontSize: '1rem',
    marginBottom: '5px',
    display: 'block',
    color: '#555',
  },
  input: {
    width: '95%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px',
  },
  error: {
    color: 'red',
    fontSize: '0.9rem',
    marginTop: '10px',
  },
  text: {
    fontSize: '0.9rem',
    color: '#555',
    marginTop: '15px',
  },
  link: {
    color: '#4CAF50',
    textDecoration: 'none',
  },
};

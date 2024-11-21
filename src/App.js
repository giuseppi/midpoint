import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './auth/Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import { auth } from './firebase'; // Import your Firebase auth instance

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // For showing a loading state

  useEffect(() => {
    // Firebase listener for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false); // Stop loading once the state is determined
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  if (loading) {
    return <p style={styles.loading}>Loading...</p>; // Display a loading message while checking auth state
  }

  return (
    <Router>
      <div style={styles.main}>
        <section style={styles.section}>
          <Routes>
            {/* Redirect to Home if authenticated */}
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate
                    to="/home"
                    replace
                  />
                ) : (
                  <div style={styles.container}>
                    <h1 style={styles.header}>Welcome to Midpoint</h1>
                    <p style={styles.text}>Plan your meet-ups effortlessly. Sign up or log in to get started!</p>
                    <button
                      onClick={() => (window.location.href = '/signup')}
                      style={styles.signupButton}
                    >
                      Sign Up
                    </button>
                    <button
                      onClick={() => (window.location.href = '/login')}
                      style={styles.loginButton}
                    >
                      Log In
                    </button>
                  </div>
                )
              }
            />
            {/* Home route */}
            <Route
              path="/home"
              element={
                isAuthenticated ? (
                  <Home />
                ) : (
                  <Navigate
                    to="/"
                    replace
                  />
                )
              }
            />
            {/* Signup route */}
            <Route
              path="/signup"
              element={<Signup />}
            />
            {/* Login route */}
            <Route
              path="/login"
              element={<Login />}
            />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#121212', // Dark background
  },
  section: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#1e1e1e', // Darker section background
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.6)', // Slightly stronger shadow for dark mode
    color: 'white', // White text by default
  },
  container: {
    textAlign: 'center',
  },
  header: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#f0f0f0', // Light grey text
  },
  text: {
    marginBottom: '20px',
    fontSize: '1.2rem',
    color: '#ccc', // Slightly dimmed text for description
  },
  signupButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#00796B', // Greenish button for sign-up
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    margin: '10px',
  },
  loginButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#005f73', // Bluish button for log-in
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    margin: '10px',
  },
  loading: {
    fontSize: '1.5rem',
    textAlign: 'center',
    color: '#ccc',
  },
};

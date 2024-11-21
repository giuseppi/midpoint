import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './auth/Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import GoogleLoginButton from './components/GoogleButton';
import HomeButton from './components/HomeButton';
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
      <HomeButton />
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
                    <div style={styles.buttonGroup}>
                      <button
                        onClick={() => (window.location.href = '/signup')}
                        style={{ ...styles.signupButton, ...styles.buttonBase }}
                      >
                        Sign Up
                      </button>
                      <button
                        onClick={() => (window.location.href = '/login')}
                        style={{ ...styles.loginButton, ...styles.buttonBase }}
                      >
                        Log In
                      </button>
                      <GoogleLoginButton style={{ ...styles.googleButton, ...styles.buttonBase }} />
                    </div>
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
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    alignItems: 'center', // Center items horizontally
    textAlign: 'center', // Center text within the container
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
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  buttonBase: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    height: '50px', // Fixed height for uniformity
    width: '200px', // Fixed width for uniformity
  },
  signupButton: {
    backgroundColor: '#00796B',
    color: 'white',
  },
  loginButton: {
    backgroundColor: '#005f73',
    color: 'white',
  },
  googleButton: {
    backgroundColor: '#444444',
    color: 'white',
  },
  loading: {
    fontSize: '1.5rem',
    textAlign: 'center',
    color: '#ccc',
  },
};

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
    return <p>Loading...</p>; // Display a loading message while checking auth state
  }

  return (
    <Router>
      <div>
        <section>
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
                  <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h1>Welcome to Midpoint</h1>
                    <p style={{ marginBottom: '20px' }}>Plan your meet-ups effortlessly. Sign up or log in to get started!</p>
                    <button
                      onClick={() => (window.location.href = '/signup')}
                      style={{
                        marginRight: '10px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                      }}
                    >
                      Sign Up
                    </button>
                    <button
                      onClick={() => (window.location.href = '/login')}
                      style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        backgroundColor: '#008CBA',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                      }}
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

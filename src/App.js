import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './auth/Home';
import Login from './auth/Login';
import Signup from './auth/Signup';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    console.log('Logged in:', { username, password });
    setIsAuthenticated(true); // Set authentication status to true
  };

  return (
    <Router>
      <div>
        <section>
          <Routes>
            {/* If authenticated, redirect to Home */}
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Home />
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
            {/* Signup route */}
            <Route
              path="/signup"
              element={<Signup />}
            />
            {/* Login route */}
            <Route
              path="/login"
              element={<Login onLogin={handleLogin} />}
            />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;

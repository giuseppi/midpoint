import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './auth/Login';
import Signup from './auth/Signup';

function App() {
  const handleLogin = (username, password) => {
    console.log('Logged in:', { username, password });
    // Add additional login logic here
  };

  return (
    <Router>
      <div>
        <section>
          <Routes>
            {/* Home route */}
            <Route
              path="/"
              element={<Home />}
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

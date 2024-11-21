import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function App() {
  const handleLogin = (username, password) => {
    console.log('Logged in:', { username, password });
    // Add additional login logic here
  };

  return (
    <Router>
      <Routes>
        {/* Default route points to Signup */}
        <Route
          path="/"
          element={<Signup />}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

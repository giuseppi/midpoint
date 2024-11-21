import './App.css';
import Login from './Login';

function App() {
  const handleLogin = (username, password) => {
    console.log('Logged in:', { username, password });
    // Add additional login logic here
  };

  return (
    <div className="App">
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users List</h1>
        {users.length === 0 ? (
          <p>Loading users...</p>
        ) : (
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user.name}</li> // assuming each user has a `name` field
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;


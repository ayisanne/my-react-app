import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  const users = [
    { name: 'Clarisse', age: 20, location: 'Quezon City' },
    { name: 'Jeremy', age: 21, location: 'Manila' },
    { name: 'Eunisse', age: 10, location: 'Antipolo' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Profiles</h1>
      </header>
      <div className="profile-container">
        {users.map((user, index) => (
          <UserProfile
            key={index}
            name={user.name}
            age={user.age}
            location={user.location}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

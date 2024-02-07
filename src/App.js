// App.js
import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/forms/LoginForm';
import CommentsForm from './components/forms/CommentsForm';
import ThankYouForm from './components/forms/ThankForm';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userComments, setUserComments] = useState('');

  const handleLogin = (enteredEmail, enteredPassword) => {
    if (enteredEmail !== '' && enteredPassword !== '') {
      setLoggedIn(true);
      setEmail(enteredEmail);
      setPassword(enteredPassword);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
    setPassword('');
    setUserComments('');
  };

  const handleCommentsSubmit = (enteredComments) => {
    // Implement your logic to save comments to the server/database here
    setUserComments(enteredComments);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <ThankYouForm onLogout={handleLogout} />
          <CommentsForm onSubmit={handleCommentsSubmit} />
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

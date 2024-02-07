// App.js
import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/forms/LoginForm';
import CommentsForm from './components/forms/CommentsForm';
import ThankYouForm from './components/forms/ThankForm';

function App() {

  const [studentInfo, setStudentInfo] = useState({
    email: '',
    comments: '',
    favoriteTopic:'',
    favoriteAssignment:''
  });

  const [studentEmail, setStudentEmail] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showCommentsForm, setShowCommentsForm] = useState(false);

  const handleLogin = (email, password) => {
    setStudentEmail(email);
    // Move to the comments form
    setShowLoginForm(false);
    setShowCommentsForm(true);
  };

  const handleLogout = () => {
    // Reset the student's email and show login form
    setStudentEmail('');
    setShowLoginForm(true);
    setShowCommentsForm(false);
    setStudentInfo({
      email: '',
      comments: '',
      favoriteTopic:'',
      favoriteAssignment:''
    });
  };

  const handleCommentsSubmit = (formData) => {
    setStudentInfo({ ...studentInfo, email: formData.email, comments: formData.comments });
    setShowCommentsForm(false);    
  };

  return (
    <div className="App">
      {showLoginForm && (
        <LoginForm onLogin={handleLogin} setStudentEmail={setStudentEmail} />
      )}
      {showCommentsForm && (
        <CommentsForm
          studentEmail={studentEmail}
          onSubmit={handleCommentsSubmit}
          onLogout={handleLogout}
        />
      )}
      {studentEmail && !showLoginForm && !showCommentsForm && (
        <ThankYouForm onLogout={handleLogout} studentInfo={studentInfo} />
      )}
    </div>
  );
};

export default App;

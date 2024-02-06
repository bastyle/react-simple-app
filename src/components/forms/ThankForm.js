// components/ThankYouForm.js
import React from 'react';

const ThankYouForm = ({ onLogout }) => {
  return (
    <>
      <h1>Welcome, Student!</h1>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

export default ThankYouForm;

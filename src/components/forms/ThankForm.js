// components/ThankYouForm.js
import React from 'react';

const ThankYouForm = ({ onLogout }) => {
  return (
    <>
      <h1>Thank you EMAIL!</h1>
      <h3>we appreciate your comments: COMMENT</h3>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

export default ThankYouForm;

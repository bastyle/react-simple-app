// components/ThankYouForm.js
import React from 'react';

const ThankYouForm = ({ onLogout, studentInfo }) => {
  return (
    <>
      <h1>Thank you {studentInfo.email}!</h1>
      <h3>we appreciate your comments: {studentInfo.comments}</h3>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

export default ThankYouForm;

// components/CommentsForm.js
import React, { useState } from 'react';

const CommentsForm = ({ onSubmit }) => {
  const [comments, setComments] = useState('');

  const handleCommentsSubmit = () => {
    onSubmit(comments);
  };

  return (
    <>
      <h2>Course Evaluation</h2>
      <form>
        <label>
          Comments:
          <textarea
            rows="4"
            cols="50"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleCommentsSubmit}>
          Submit Comments
        </button>
      </form>
    </>
  );
};

export default CommentsForm;

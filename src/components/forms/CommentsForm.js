// components/CommentsForm.js
import React, { useState } from 'react';

const CommentsForm = ({ onSubmit, studentEmail, onLogout }) => {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [comments, setComments] = useState('');
  const [favoriteTopic, setFavoriteTopic] = useState('');
  const [favoriteAssignment, setFavoriteAssignment] = useState('');

  const handleSubmit = () => {
    // Validate the fields as needed before submitting
    // For simplicity, we're assuming all fields are required

    const formData = {
      email: studentEmail,
      courseCode,
      courseName,
      comments,
      favoriteTopic,
      favoriteAssignment,
    };

    onSubmit(formData);
  };

  return (
    <>
      <h2>Course Evaluation</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Email:</td>
              <td>
                <input type="email" value={studentEmail} readOnly />
              </td>
            </tr>
            <tr>
              <td>Course Code:</td>
              <td>
                <input
                  type="text"
                  value={courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Course Name:</td>
              <td>
                <input
                  type="text"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Comments:</td>
              <td>
                <textarea
                  rows="4"
                  cols="50"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Favorite Topic:</td>
              <td>
                <input
                  type="text"
                  value={favoriteTopic}
                  onChange={(e) => setFavoriteTopic(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Favorite Assignment:</td>
              <td>
                <input
                  type="text"
                  value={favoriteAssignment}
                  onChange={(e) => setFavoriteAssignment(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" onClick={handleSubmit}>
          Submit Comments
        </button>
      </form>
      <button onClick={onLogout}> 2</button>
    </>
  );
};

export default CommentsForm;

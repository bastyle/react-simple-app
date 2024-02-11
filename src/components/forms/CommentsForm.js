import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentsForm = ({ onSubmit, studentEmail, onLogout }) => {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [comments, setComments] = useState('');
  const [favoriteTopic, setFavoriteTopic] = useState('');
  const [favoriteAssignment, setFavoriteAssignment] = useState('');


  const validateForm = () => {
    if (!courseCode.trim() || !courseName.trim() || !comments.trim() || !favoriteTopic.trim() || !favoriteAssignment.trim()) {
      toast.error('All fields are required');
      return false;
    }
    return true;
  };


  const handleSubmit = () => {
    
    if (validateForm()) {
      const formData = {
        email: studentEmail,
        courseCode,
        courseName,
        comments,
        favoriteTopic,
        favoriteAssignment,
      };  
      onSubmit(formData);
    }
    
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
          Submit Comment
        </button>
      </form>      
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </>
  );
};

export default CommentsForm;

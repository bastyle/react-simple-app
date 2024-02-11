// components/LoginForm.js
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({ onLogin, setStudentEmail  }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const validatePassword = (inputPassword) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(inputPassword);
  };

  const handleLogin = () => {
    
    if (!validateEmail(email)) {
      toast.error('Invalid email address');
      return;
    }

    if (!validatePassword(password)) {
      toast.error(
        'Password must be at least 8 characters, with at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }

    onLogin(email, password);
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <table>
            <tr>
              <td>
                <label>Email:</label>
                </td>
              <td>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </td>
            </tr>
          <tr>
            <td>
              <label>Password:</label>
            </td>
            <td>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </td>
          </tr>
          <tr>            
            <td colSpan={2}>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            </td>
          </tr>
        </table>         
        
        
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </>
  );
};

export default LoginForm;

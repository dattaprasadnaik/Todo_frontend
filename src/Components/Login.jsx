import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const handleTodoRedirect = () => {
    alert('login successfull')
    navigate('/Todo')
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <div className="form-actions">
          <button type="submit" className="login-button" onClick={handleTodoRedirect}>Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login
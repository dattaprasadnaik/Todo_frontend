import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
      alert('Signup successfull');
        navigate('/Login');
    };

   return (
        <div className="signup">
            <h2>Sign Up</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your Password" />
                </div>
                <div className="form-actions">
                    <button type="submit" className="button" onClick={handleLoginRedirect}>Sign Up</button>
                    <button type="button" className="button" onClick={handleLoginRedirect}>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Signup
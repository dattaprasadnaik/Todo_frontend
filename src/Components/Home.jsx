import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <Link to="/signup">
        <button className="home-button">Sign Up</button>
      </Link>
      <Link to="/login">
        <button className="home-button">Login</button>
      </Link>
    </div>
  );
}

export default Home
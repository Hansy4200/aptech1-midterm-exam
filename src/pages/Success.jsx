import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="page">
      <h1>Success!</h1>
      <p>Your registration was successful!</p>
      <p>You can now <Link to="/profile">view your profile</Link> or go back to <Link to="/home">home</Link>.</p>
    </div>
  );
}

export default Success;
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Success!</h1>
      <p>Your registration was successful!</p>
      <p>You can now <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>view your profile</button> or go back to <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>home</button>.</p>
    </div>
  );
}

export default Success;
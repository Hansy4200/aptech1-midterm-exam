import React from 'react';

function Profile() {
  return (
    <div className="page">
      <h1>Student Profile</h1>
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
        <h2>Hans Paloga</h2>
        <p><strong>Email:</strong> hans.paloga@ub.com</p>
        <p><strong>Major:</strong> Computer Science</p>
        <p><strong>Year:</strong> Junior</p>
        <p><strong>Bio:</strong> Passionate about web development and machine learning.</p>
      </div>
    </div>
  );
}

export default Profile;
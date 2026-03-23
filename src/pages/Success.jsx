import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Feedback submitted:', data);
    alert('Thank you for your feedback!');
  };

  return (
    <div className="page">
      <h1>Success!</h1>
      <p>Your registration was successful!</p>
      <p>You can now <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>view your profile</button> or go back to <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>home</button>.</p>

      <h2>Leave Feedback</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Feedback:</label>
          <textarea
            {...register('feedback', { required: 'Feedback is required' })}
            rows="4"
            style={{ width: '100%', padding: '8px', border: errors.feedback ? '2px solid red' : '1px solid #ccc' }}
          />
          {errors.feedback && <p style={{ color: 'red' }}>{errors.feedback.message}</p>}
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Success;
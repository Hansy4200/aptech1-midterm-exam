import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

  const nameRegex = /^[A-Za-z]{2,}$/;
  const usernameRegex = /^[A-Za-z0-9._-]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    navigate('/success');
  };

  return (
    <div className="page">
      <h1>Sign Up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: '500px' }}
      >
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            {...register('name', {
              required: 'First name is required',
              pattern: { value: nameRegex, message: 'First name must contain only letters and at least 2 characters' }
            })}
            style={{ width: '100%', padding: '8px', border: errors.name ? '2px solid red' : '1px solid #ccc' }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            {...register('username', {
              required: 'Username is required',
              pattern: { value: usernameRegex, message: 'Username can contain letters, numbers, ., _, - only' }
            })}
            style={{ width: '100%', padding: '8px', border: errors.username ? '2px solid red' : '1px solid #ccc' }}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: emailRegex, message: 'Enter a valid email address' }
            })}
            style={{ width: '100%', padding: '8px', border: errors.email ? '2px solid red' : '1px solid #ccc' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Password is required',
              pattern: { value: passwordRegex, message: 'Password must be 8-16 chars with upper+lower+digit+special' }
            })}
            style={{ width: '100%', padding: '8px', border: errors.password ? '2px solid red' : '1px solid #ccc' }}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="major">Major:</label>
          <input
            type="text"
            id="major"
            {...register('major', { required: 'Major is required' })}
            style={{ width: '100%', padding: '8px', border: errors.major ? '2px solid red' : '1px solid #ccc' }}
          />
          {errors.major && <p style={{ color: 'red' }}>{errors.major.message}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="year">Year:</label>
          <select
            id="year"
            {...register('year', { required: 'Year is required' })}
            style={{ width: '100%', padding: '8px', border: errors.year ? '2px solid red' : '1px solid #ccc' }}
          >
            <option value="">Select Year</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>
          {errors.year && <p style={{ color: 'red' }}>{errors.year.message}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            {...register('bio')}
            rows="4"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button
          type="submit"
          disabled={!isValid}
          style={{
            padding: '10px 20px',
            backgroundColor: !isValid ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: !isValid ? 'not-allowed' : 'pointer'
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;

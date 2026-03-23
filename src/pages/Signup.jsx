import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    major: '',
    year: '',
    bio: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const nameRegex = /^[A-Za-z]{2,}$/;
  const usernameRegex = /^[A-Za-z0-9._-]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    switch (name) {
      case 'name':
        if (!nameRegex.test(value)) {
          newErrors.name = 'First name must contain only letters and at least 2 characters';
        } else {
          delete newErrors.name;
        }
        break;
      case 'username':
        if (!usernameRegex.test(value)) {
          newErrors.username = 'Username can contain letters, numbers, ., _, - only';
        } else {
          delete newErrors.username;
        }
        break;
      case 'email':
        if (!emailRegex.test(value)) {
          newErrors.email = 'Enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'password':
        if (!passwordRegex.test(value)) {
          newErrors.password = 'Password must be 8-16 chars with upper+lower+digit+special';
        } else {
          delete newErrors.password;
        }
        break;
      case 'major':
        if (!value.trim()) {
          newErrors.major = 'Major is required';
        } else {
          delete newErrors.major;
        }
        break;
      case 'year':
        if (!value) {
          newErrors.year = 'Year is required';
        } else {
          delete newErrors.year;
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  return (
    <div className="page">
      <h1>Sign Up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (Object.keys(errors).length === 0) {
            console.log('Form submitted:', formData);
            navigate('/success');
          }
        }}
        style={{ maxWidth: '500px' }}
      >
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: errors.name ? '2px solid red' : '1px solid #ccc' }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: errors.username ? '2px solid red' : '1px solid #ccc' }}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: errors.email ? '2px solid red' : '1px solid #ccc' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: errors.password ? '2px solid red' : '1px solid #ccc' }}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="major">Major:</label>
          <input
            type="text"
            id="major"
            name="major"
            value={formData.major}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: errors.major ? '2px solid red' : '1px solid #ccc' }}
          />
          {errors.major && <p style={{ color: 'red' }}>{errors.major}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="year">Year:</label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: errors.year ? '2px solid red' : '1px solid #ccc' }}
          >
            <option value="">Select Year</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>
          {errors.year && <p style={{ color: 'red' }}>{errors.year}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            rows="4"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          style={{
            padding: '10px 20px',
            backgroundColor: Object.keys(errors).length > 0 ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: Object.keys(errors).length > 0 ? 'not-allowed' : 'pointer'
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
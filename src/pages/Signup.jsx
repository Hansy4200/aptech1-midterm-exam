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

  const validate = () => {
    const newErrors = {};
    if (!nameRegex.test(formData.name)) {
      newErrors.name = 'First name must contain only letters and at least 2 characters';
    }
    if (!usernameRegex.test(formData.username)) {
      newErrors.username = 'Username can contain letters, numbers, ., _, - only';
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be 8-16 chars with upper+lower+digit+special';
    }
    if (!formData.major.trim()) {
      newErrors.major = 'Major is required';
    }
    if (!formData.year) {
      newErrors.year = 'Year is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="page">
      <h1>Sign Up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (validate()) {
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
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            style={{ width: '100%', padding: '8px' }}
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
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
            style={{ width: '100%', padding: '8px' }}
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
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            style={{ width: '100%', padding: '8px' }}
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
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            style={{ width: '100%', padding: '8px' }}
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
            onChange={(e) => setFormData({ ...formData, major: e.target.value })}
            required
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.major && <p style={{ color: 'red' }}>{errors.major}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="year">Year:</label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            required
            style={{ width: '100%', padding: '8px' }}
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

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
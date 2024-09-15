import React, { useState } from 'react';
import styles from '../styles/register.module.css'; // Import the CSS module

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!username) errors.username = 'Username is required';
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Here you can handle the registration logic (e.g., sending the data to your backend API)
    alert(`User registered with Email: ${email}`);
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className={styles.input}
            required 
          />
          {errors.username && <span className={styles.error}>{errors.username}</span>}
        </div>
        <div className={styles.formGroup}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={styles.input}
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className={styles.input}
            required 
            />
        </div>
        <div className={styles.formGroup}>
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className={styles.input}
            required 
            />
        </div>
        <button type="submit" className={styles.button}>Register</button>
 
      </form>
    </div>
  );
}

export default Register;

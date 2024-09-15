import { useState } from 'react';
import styles from '../styles/login.module.css'; // Import the CSS module

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    alert('Logged in');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
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
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
}

export default Login;

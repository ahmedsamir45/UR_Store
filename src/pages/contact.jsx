import React, { useState } from 'react';
import styles from '../styles/contact.module.css'; // Import the CSS module

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>
        We’d love to hear from you! Please fill out the form below with any questions, comments, or feedback.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className={styles.input}
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={styles.input}
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <textarea 
            placeholder="Your Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            className={styles.input} // Reuse input style for textarea
            rows="6"
            required 
          />
        </div>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

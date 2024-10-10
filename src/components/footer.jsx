import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/footer.module.css'; // Import the CSS module

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Ahmed Samir . All Rights Reserved.</p>
      <div className={styles.links}>
        
      </div>
      <div className={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/ahmed-samir-917ba22a5/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/ahmedsamir45" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

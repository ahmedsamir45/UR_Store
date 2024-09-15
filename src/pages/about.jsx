import React from 'react';
import styles from '../styles/about.module.css'; // Import the CSS module

function About() {
  return (
    <div className={`container ${styles.pageContainer}`}>
      <header className={styles.header}>
        <h1>About Us</h1>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.introduction}>
          <p>
            Welcome to <strong>UR Store</strong>, your number one source for all products. We're dedicated to giving you the best products, with a focus on dependability, customer service, and uniqueness.
          </p>
          <p>
            Founded in 2024, MyStore has come a long way from its beginnings. We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
        </section>
        <section className={styles.mission}>
          <h2>Our Mission</h2>
          <p>
            At MyStore, our mission is to provide high-quality products that cater to your needs and preferences. We are committed to continuous improvement and strive to exceed our customers' expectations every day.
          </p>
        </section>

        <section className={styles.contact}>
          <h2>Contact Us</h2>
          <p>If you have any questions or need further information, feel free to reach out to us at:</p>
          <p>Email: <a href="mailto:support@mystore.com">support@mystore.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
        </section>
      </main>
    </div>
  );
}

export default About;

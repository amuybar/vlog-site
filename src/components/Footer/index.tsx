// Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h2>Subscribe to our newsletter</h2>
        <form action="#">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <p>&copy; 2024 Lea Beauty. All rights reserved.</p>
    </footer>
  );
}

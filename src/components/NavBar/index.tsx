'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <span className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </span>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.show : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="#about">About</Link></li><li><Link href="/hairstyle">Hairstyle</Link></li>
        <li><Link href="/makeup">Makeup</Link></li>
        <li><Link href="/skincare">Skincare</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

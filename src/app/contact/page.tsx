import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

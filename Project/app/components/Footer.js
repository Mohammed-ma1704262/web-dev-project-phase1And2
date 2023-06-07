import React from 'react'
import Link from 'next/link'
import styles from '../page.module.css'

export default function Footer() {
    return (
      
        <footer className='footer'>
        <div className="contactUs">
            <h2>Contact Us</h2>
          </div>

          <div class="social-icons">
            <a href="#"><img src="./images/instagram-logo.png" alt="Instagram"></img></a>
            <a href="#"><img src="./images/facebook-logo.png" alt="Facebook"></img></a>
            <a href="#"><img src="./images/twitter-logo.png" alt="Twitter"></img></a>
          </div>
      </footer>
    )
}

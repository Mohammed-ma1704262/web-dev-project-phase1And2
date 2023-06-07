import React from 'react'
import Link from 'next/link'
import styles from '../page.module.css'

export default function NavBar() {
    return (
        // <nav className={styles.nav}>
        //     <ul>
        //         <li>Alpha Bank</li>
        //         <li><Link href="/">Home</Link></li>
        //         <li><Link href="/accounts/trans">Add Transaction</Link></li>
        //         <li><Link href="/accounts/report">Summary Reports</Link></li>
        //     </ul>
        // </nav>
        <header className='header'>
        <div class="logo">
        <a href="./"><img src="./images/Logo.png" alt="Logo" width="150"></img></a>
     </div>
    <div className="nav">
      <ul>
        <li><a href="./editSchedule.html">Schedule</a></li>
        <li><a href="#">Events</a></li>
      </ul>
    </div>
    <div className="login">
      <a href="./login.html">Login</a>
    </div>
    </header>
    )
}

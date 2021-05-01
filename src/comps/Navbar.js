import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className='flex'>
            <ul className='navigations flex'>
                <Link to="/"><li>Home</li></Link>
                <li>Sign Up</li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            <ul className='icon'>
                <li>D<span>OIT</span> </li>
            </ul>
        </nav>
    )
}

export default Navbar

import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext";




function Navbar() {
    const history = useHistory()
    const { currentUser, logOut } = useAuth();
    const handleLogout = async () => {
        await logOut();
        history.push("/")
    }
    return (
        <nav className='flex'>
            <ul className='navigations flex'>
                <li><Link className="Link" to="/">Home</Link></li>
                {currentUser ? <LoggedInLinks handleLogout={handleLogout} /> : <LoggedOutLinks />}
            </ul>
            <ul className='icon'>
                <li>D<span>OIT</span> </li>
            </ul>
        </nav>
    )


}

function LoggedInLinks({ handleLogout }) {
    return <>
        <li><Link className="Link" to="/mydashboard">My dashboard</Link></li>
        <li><Link onClick={handleLogout} className="Link">Log Out</Link></li>
    </>


}
function LoggedOutLinks() {
    return <>
        <li><Link className="Link" to="/signup">Sign Up</Link></li>
        <li><Link className="Link" to="/login">Login</Link></li>
    </>

}


export default Navbar

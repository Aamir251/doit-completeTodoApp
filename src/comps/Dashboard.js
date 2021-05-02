import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";

import TodoContainer from "../comps/TodoContainer"


function Dashboard() {
    const history = useHistory()
    const { currentUser } = useAuth();

    useEffect(() => {
        if (!currentUser) history.push("/login")

    }, [])

    return (
        <section className='grid dashboard-container'>
            <Sidebar currentUser={currentUser} />
            <TodoContainer />
        </section>
    )

}

const Sidebar = ({ currentUser }) => {
    return <aside className='flex flex-c'>
        <span>Logged in as {currentUser.email}</span>
        <ul className='sidebar'>
            <li className='flex'><img className='calendar-icon' src="icons/today.png" alt="calendar-icon" /> Today</li>
            <li className='flex'><img className='calendar-icon' src="icons/tomorrow.png" alt="calendar-icon" />Tomorrow</li>
        </ul>
    </aside>
}


export default Dashboard

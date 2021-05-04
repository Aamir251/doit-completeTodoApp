import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";
import { FirestoreProvider } from "../contexts/FirestoreContext"
import TodoContainer from "../comps/TodoContainer"
import AddTodo from "../comps/AddTodo";

function Dashboard() {
    const history = useHistory()
    const { currentUser } = useAuth();

    const [showTodoForm, setShowTodoForm] = useState(false)


    useEffect(() => {
        if (!currentUser) history.push("/login")
    }, [])
    return (
        <FirestoreProvider>

            <section className='dashboard-container'>
                <Sidebar currentUser={currentUser} />
                <TodoContainer />
                <img onClick={() => setShowTodoForm(true)} className='add-icon' src="icons/add-button.png" alt="" />

                {showTodoForm && <AddTodo showTodoForm={showTodoForm} setShowTodoForm={setShowTodoForm} />}
            </section>
        </FirestoreProvider>
    )

}

const Sidebar = ({ currentUser }) => {
    return <aside className="flex flex-c">
        <span>Logged in as {currentUser.email}</span>
        <ul>
            <li className='flex'><img className='calendar-icon' src="icons/today.png" alt="calendar-icon" /> Today</li>
            <li className='flex'><img className='calendar-icon-tomorrow' src="icons/tomorrow.png" alt="calendar-icon" />Tomorrow</li>
        </ul>
    </aside>
}



export default Dashboard

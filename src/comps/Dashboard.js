import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";
import { FirestoreProvider } from "../contexts/FirestoreContext"
import TodoContainer from "../comps/TodoContainer"
import AddTodo from "../comps/AddTodo";

function Dashboard() {
    let today = new Date()
    let tomorrow = new Date(today)
    const history = useHistory()
    const { currentUser } = useAuth();
    let [dateToShow, setDateToShow] = useState(today.getDate())
    const [showTodoForm, setShowTodoForm] = useState(false)

    useEffect(() => {
        if (!currentUser) history.push("/login")
    }, []);

    return (
        <FirestoreProvider>

            <section className='dashboard-container'>
                <Sidebar
                    currentUser={currentUser}
                    setDateToShow={setDateToShow}
                    today={today}
                    tomorrow={tomorrow} />

                <TodoContainer today={today} tomorrow={tomorrow} dateToShow={dateToShow} />
                <img onClick={() => setShowTodoForm(true)} className='add-icon' src="icons/add-button.png" alt="" />

                {showTodoForm && <AddTodo today={today} tomorrow={tomorrow}
                    showTodoForm={showTodoForm}
                    setShowTodoForm={setShowTodoForm} />}
            </section>
        </FirestoreProvider>
    )

}

const Sidebar = ({ currentUser, today, tomorrow, setDateToShow }) => {

    tomorrow.setDate(today.getDate() + 1)
    return <aside className="flex flex-c">
        <span>Logged in as {currentUser.email}</span>
        <ul>
            <li onClick={() => setDateToShow(today.getDate())} className='flex'><img className='calendar-icon' src="icons/today.png" alt="calendar-icon" /> Today</li>
            <li onClick={() => setDateToShow(tomorrow.getDate())} className='flex'><img className='calendar-icon-tomorrow' src="icons/tomorrow.png" alt="calendar-icon" />Tomorrow</li>
        </ul>
    </aside >
}



export default Dashboard

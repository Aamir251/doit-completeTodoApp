import React, { useEffect, useState } from 'react'
import { useHistory, Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";
import { FirestoreProvider } from "../contexts/FirestoreContext"
import TodoContainer from "../comps/TodoContainer"
import AddTodo from "../comps/AddTodo";

function Dashboard() {
    let today = new Date()
    let tomorrow = new Date(today)
    const history = useHistory()
    const { currentUser, logOut } = useAuth();
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
                    dateToShow={dateToShow}
                    today={today}
                    logOut={logOut}
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

const Sidebar = ({ currentUser, today, tomorrow, setDateToShow, dateToShow, logOut }) => {
    const history = useHistory()

    const handleLogout = async () => {
        await logOut();
        history.push("/")

    }

    tomorrow.setDate(today.getDate() + 1);

    const isTodaySelected = dateToShow === today.getDate()

    return <aside className="flex flex-c">
        <h4>Current User</h4>
        <span>{currentUser.email}</span>
        <Link onClick={handleLogout} className="Link btn">Log Out</Link>
        <ul>
            <li onClick={() => setDateToShow(today.getDate())} className={`flex ptr ${isTodaySelected && "bg-white"} `} ><img className='calendar-icon' src="icons/today.png" alt="calendar-icon" /> Today</li>
            <li onClick={() => setDateToShow(tomorrow.getDate())} className={`flex ptr ${!isTodaySelected && "bg-white"} `}><img className='calendar-icon-tomorrow' src="icons/tomorrow.png" alt="calendar-icon" />Tomorrow</li>
        </ul>
    </aside >
}



export default Dashboard

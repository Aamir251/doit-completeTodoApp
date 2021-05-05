import React, { useState, useEffect } from 'react'
import { useFirestore } from "../contexts/FirestoreContext";
import { currentDay } from "../currentDay"
function TodoContainer({ dateToShow, today, tomorrow }) {


    // let dateToShow = dateToShow
    const { currentTasks, setTasks } = useFirestore()
    const [tasksToShow, setTasksToShow] = useState([])

    useEffect(() => {

        setTasksToShow(currentTasks.filter(task => task.taskDate === dateToShow))
        console.log(tasksToShow);

    }, [dateToShow])

    return (
        <section className='todo-container'>
            <header>
                <h4 > {currentDay()} </h4>
                <div className='todays-date flex'>
                    <h4 >{`${new Date().getUTCDate()}-${new Date().getUTCMonth()}-${new Date().getUTCFullYear()}`} </h4>
                </div>
            </header>
            <ul className='todos'>
                {currentTasks.filter(task => task.taskDate === dateToShow).map((task, index) => {
                    return (
                        <li className=' grid grid-3'>
                            <Bullet />
                            <Todo task={task} />
                            <DeleteIcon createdAt={task.createdAt} currentTasks={currentTasks} setTasks={setTasks} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

const Todo = ({ task }) => {
    return (
        <article>
            <div className='flex'>
                {/* // Name of the Todo Goes Here; */}
                <h4> <span>{task.name}</span></h4>
                {/* Time Goes Here */}
                <p>{task.time}</p>
            </div>
            {/* Short Note goes here */}
            <p>{task.note}</p>
        </article>
    )
}

const Bullet = () => {
    return (
        <img className='bullet shadow' src="icons/bullet.png" alt="list icon" />
    )
}

const DeleteIcon = ({ currentTasks, setTasks, createdAt }) => {

    const handleClick = (createdAt) => {
        let newTasks = currentTasks.filter((task) => task.createdAt !== createdAt)
        console.log(newTasks);
        setTasks(newTasks)
    }
    return (
        <img onClick={() => { handleClick(createdAt) }} className='delete-icon shadow' src="icons/remove.png" alt="" srcset="" />
    )
}
export default TodoContainer;

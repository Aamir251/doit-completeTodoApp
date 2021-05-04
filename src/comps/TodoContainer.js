import React, { useState, useEffect } from 'react'
import { useFirestore } from "../contexts/FirestoreContext";

function TodoContainer() {
    const { currentTasks, setTasks } = useFirestore()

    return (
        <section className='todo-container'>
            <header>
                <h2>Sunday</h2>
            </header>
            <ul className='todos'>
                {currentTasks.map((task, index) => {
                    return (
                        <li className=' grid grid-3'>
                            <Bullet />
                            <Todo task={task} />
                            <DeleteIcon index={index} currentTasks={currentTasks} setTasks={setTasks} />
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
        <img className='bullet' src="icons/bullet.png" alt="list icon" />
    )
}

const DeleteIcon = ({ index, currentTasks, setTasks }) => {

    const handleClick = (index) => {
        alert(index)
        let newTasks = currentTasks.filter((task, ind) => ind !== index)
        console.log(newTasks);
        setTasks(newTasks)
    }
    return (
        <img onClick={() => { handleClick(index) }} className='delete-icon' src="icons/remove.png" alt="" srcset="" />
    )
}
export default TodoContainer;

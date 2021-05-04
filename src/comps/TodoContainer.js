import React, { useState, useEffect } from 'react'
import { useFirestore } from "../contexts/FirestoreContext";

function TodoContainer() {
    const { currentTasks } = useFirestore()

    console.log(currentTasks);

    return (
        <section className='todo-container'>
            <header>
                <h2>Sunday</h2>
            </header>
            <ul className='todos'>
                {currentTasks.map(task => {
                    return (
                        <li className=' grid grid-3'> <Bullet /> <Todo task={task} /> <DeleteIcon /></li>
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

const DeleteIcon = () => {
    return (
        <img className='delete-icon' src="icons/remove.png" alt="" srcset="" />
    )
}
export default TodoContainer;

import React from 'react'

function TodoContainer() {
    return (
        <section className='todo-container'>
            <header>
                <h2>Sunday</h2>
            </header>
            <ul className='todos'>
                <li className='flex'> <Bullet /> <Todo /></li>
            </ul>
        </section>
    )
}

const Todo = () => {
    return (
        <article>
            {/* // Name of the Todo Goes Here; */}
            <h4> <span>Attend Meeting</span></h4>
            {/* Short Note goes here */}
            <p>Discussion about Page Security</p>
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
        <img src="icons/remove.png" alt="" srcset="" />
    )
}
export default TodoContainer;

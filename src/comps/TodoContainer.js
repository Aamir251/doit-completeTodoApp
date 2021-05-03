import React from 'react'

function TodoContainer() {
    return (
        <section className='todo-container'>
            <header>
                <h2>Sunday</h2>
            </header>
            <ul className='todos'>
                <li className=' grid grid-3'> <Bullet /> <Todo /> <DeleteIcon /></li>
                <li className=' grid grid-3'> <Bullet /> <Todo /> <DeleteIcon /></li>
                <li className=' grid grid-3'> <Bullet /> <Todo /> <DeleteIcon /></li>
            </ul>
        </section>
    )
}

const Todo = () => {
    return (
        <article>
            <div className='flex'>
                {/* // Name of the Todo Goes Here; */}
                <h4> <span>Attend Meeting</span></h4>
                {/* Time Goes Here */}
                <p>10 : 00 A.M</p>
            </div>
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
        <img className='delete-icon' src="icons/remove.png" alt="" srcset="" />
    )
}
export default TodoContainer;

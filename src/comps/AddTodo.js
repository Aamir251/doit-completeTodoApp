import React, { useState, useEffect, useRef } from 'react'

import { useFirestore } from "../contexts/FirestoreContext";
import TimePicker from 'react-time-picker'

function AddTodo({ showTodoForm, setShowTodoForm, today, tomorrow }) {
    const [error, setError] = useState('');
    const formRef = useRef(null)
    const taskNameRef = useRef(null)
    const taskNoteRef = useRef(null)
    const dateRef = useRef(null)
    const { addTask } = useFirestore()
    const initialTime = "10:00:00"
    let taskDate = null;
    let timePicked = ''
    const [time, setTime] = useState("10:00:00")


    const handleChange = (value) => {
        setTime(value)
        // setTime(timePicked)

    }

    const checkTime = (time) => {
        let hour = (time.slice(0, 2))
        let amPm = (hour >= 12) ? 'P.M' : 'A.M'

        hour = hour % 12 || 12
        // Minutes
        let minute = time.slice(3, 5)
        return `${hour}:${minute}:${amPm}`

    }
    const handleSubmit = async (e) => {

        e.preventDefault()
        if (dateRef.current.value === 'today') {
            // setDate(new Date().getDate())
            taskDate = today.getDate()
        }
        else if (dateRef.current.value === 'tomorrow') {
            console.log("Tomorrow date selected");
            // setDate(new Date().getDate())
            // console.log(tomorrow.getDate());
            tomorrow.setDate(tomorrow.getDate() + 1)
            taskDate = tomorrow.getDate()
        }
        console.log(taskDate);
        await addTask(taskNameRef.current.value, taskNoteRef.current.value, checkTime(time), taskDate)
        // await formRef.current.reset()
        await setShowTodoForm(false)
    }


    const handleClick = (e) => {
        if (e.target.classList.contains("backdrop")) {
            setShowTodoForm(false)
        }
    }
    return (
        <section onClick={handleClick} className="backdrop form-section bg-color flex">
            <div className="form-container flex flex-c">
                <h3 className='txt-center'> <span>Add New Task</span> </h3>
                {error}
                <form ref={formRef} onSubmit={handleSubmit} className='flex flex-c'>

                    <div>
                        <label htmlFor="task-name">Task Name</label>
                        <input type="text" id='task-name' name='task-name' autoComplete='off' ref={taskNameRef} />
                    </div>

                    <div>
                        <label htmlFor="short-note">Short Note</label>
                        <input type="text" id='short-note' name='short-note' ref={taskNoteRef} />
                    </div>
                    <div>
                        <TimePicker amPmAriaLabel="Select AM PM" disableClock={true} onChange={handleChange} value={initialTime} />
                    </div>
                    <div>
                        {/* <label htmlFor="date">Choose a Date</label> */}
                        <select ref={dateRef} name="date" id="date">
                            <option value="today">Today</option>
                            <option value="tomorrow">Tomorrow</option>
                        </select>
                    </div>
                    <button className='btn'>Add Task</button>
                </form>
            </div>
        </section>

    )
}

export default AddTodo

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CreateUser } from "../firebase/auth"
function Login() {
    const [person, setPerson] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (person.email && person.password) {
            CreateUser(person)
        }
    }
    return (
        <section className='form-section bg-color flex'>

            <div className="form-container flex flex-c" auto>
                <h3 className='txt-center'><span>Login</span></h3>
                <form onSubmit={handleSubmit} className='flex flex-c'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onChange={handleChange} type="text" id='email' name='email' autoComplete='off' value={person.email} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={handleChange} type="text" id='password' name='password' value={person.password} />
                    </div>
                    <button className='btn'>Go</button>
                </form>

                <p>No account? <Link to="/signup"><span>Sign Up</span></Link> </p>

            </div>
            <img className='bg-img' src="images/wave.png" alt="background image" />
        </section>
    )
}

export default Login

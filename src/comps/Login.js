import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <section className='form-section bg-color flex'>

            <div className="form-container flex flex-c" auto>
                <h3 className='txt-center'><span>Login</span></h3>
                <form className='flex flex-c'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' name='email' autoComplete='off' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" id='password' name='password' />
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

import React, { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"
function Form({ formType }) {

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { signUp, logIn } = useAuth();
    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formType === 'signup') {
            const password = passwordRef.current.value;
            const confirmPassword = confirmPasswordRef.current.value;
            if (password !== confirmPassword) return setError("Passwords don't match");

            try {
                setError('')
                setLoading(true)
                await signUp(emailRef.current.value, password)
                history.push("/mydashboard")
            } catch {
                setError('Failed to Create Account')
            }
            setLoading('false')
        }
        if (formType === 'login') {

            try {
                setError('');
                setLoading(true)
                await logIn(emailRef.current.value, passwordRef.current.value);
                history.push("/mydashboard")

            } catch {
                setError("Account Doesn't exist");

            }
            setLoading(false)
        }

    }

    return (
        <section className='form-section bg-color flex'>

            <div className="form-container flex flex-c" auto>
                <h3 className='txt-center'><span>{formType}</span></h3>
                {error}
                <form onSubmit={handleSubmit} className='flex flex-c'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' name='email' autoComplete='off' ref={emailRef} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' ref={passwordRef} />
                    </div>
                    {formType === 'signup' && <div>
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input type="password" id='confirmpassword' name='confirmpassword' ref={confirmPasswordRef} />
                    </div>}
                    <button disabled={loading} className='btn'>Go</button>
                </form>

                {(formType === 'signup') ? <p>have an account? <Link to="/login"><span>Log In</span></Link> </p> : <p>No Account <Link to="/signup"><span>Sign Up</span></Link> </p>}


            </div>
            <img className='bg-img' src="images/wave.png" alt="background image" />
        </section>
    )
}

export default Form;

import React from 'react'
import { Link } from "react-router-dom"
function Home() {
    return (
        <section className='home flex flex-c bg-color'>
            <h1 className='icon'>D<span>OIT</span></h1>
            <h4>Manage your Time Better</h4>
            <Link to="/login"><button className='btn'>Get Started</button></Link>
        </section>
    )
}

export default Home

import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function Navbar() {
  return (
    <>
        <nav>
            <Link to= "/">Home</Link>
            <Link to= "/about">About</Link>
            <Link to= "/contact">Contact</Link>
        </nav>
    </>
  )
}

export default Navbar

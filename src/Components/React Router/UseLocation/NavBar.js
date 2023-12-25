import React from 'react'
import {NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <ul>
            <NavLink className="navElements" to="/">Home</NavLink>
            <NavLink className="navElements" to="/ContactPage">Contact Page</NavLink>
            <NavLink className="navElements" to="/Blogs">Blogs</NavLink>
            <NavLink className="navElements" to="/AboutUspage">About Us Page</NavLink>
        </ul>
    </nav>
  )
}
// Link is used to resolve reloading
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavBar from "../UseLocation/NavBar"
import Home from "../Basics/Home"
import ContactPage from "../Basics/ContactPage"
import AboutUsPage from '../Basics/AboutUsPage'
import ErrorPage from "../Basics/ErrorPage"
import Blogs from "../UseLocation/Blogs"
import BlogsDesc from "../UseLocation/BlogsDesc"
import Protected from './Protected'

export default function Index() {
    const [isLoggedIn,setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
        <NavBar />
        <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>{isLoggedIn ? "Log Out" : "Log In"}</button>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/ContactPage" element={<ContactPage />}></Route>
            <Route path="/Blogs" element={<Blogs />}></Route>
            <Route path="/AboutUsPage" element={<AboutUsPage />}></Route>
            <Route path='/Blogs/:title' 
            element={
              <Protected isLoggedIn={isLoggedIn} Children={<BlogsDesc />} />
            }
            />
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

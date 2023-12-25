import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import AboutUsPage from './AboutUsPage'
import ContactPage from '../Basics/ContactPage'
import ErrorPage from '../Basics/ErrorPage'
import Home from '../Basics/Home'
import NavBar from './NavBar'

export default function ReactRouter() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ContactPage' element={<ContactPage />}/>
            <Route path='/AboutUsPage' element={<AboutUsPage />}/>
            <Route path='*' element={<ErrorPage />}/>
        </Routes>

    </BrowserRouter>
  )
}

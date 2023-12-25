import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AboutUsPage from './AboutUsPage'
import ContactPage from './ContactPage'
import ErrorPage from './ErrorPage'
import Home from './Home'

export default function ReactRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ContactPage' element={<ContactPage />}/>
            <Route path='/AboutUsPage' element={<AboutUsPage />}/>
            <Route path='*' element={<ErrorPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './User'

export default function Index() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/user" element={<User />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

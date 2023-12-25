import React from 'react'
import { useLocation } from 'react-router-dom'

export default function BlogsDesc() {
  const location = useLocation()

  return (
    <div>
        <h3>Blogs</h3>
        <h4>{location.state.title}</h4>
        <p>{location.state.body.slice(0, 1000)}</p>
        <p>{location.state.body.slice(1001, 2000)}</p>
    </div>
  )
}

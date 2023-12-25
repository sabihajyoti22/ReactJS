import React from 'react'

export default function ChildComponent(props) {
    const data = "I am from Child Component"
    const handleClick = () => {
      props.onChildData(true)
    }
    return (
    <button onClick={handleClick}>click me</button>
    )
    
  }

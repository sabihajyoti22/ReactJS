import React, {useState} from 'react'

export default function Hooks_UseState() {
    const [count, setCount] = useState(0)
    const clickEventHandler = () => {
        setCount(count+1)
    }
  return (
    <div>
        <h1 className="Header" style={{textAlign: "center"}}>Hooks</h1>
        <h1>Count: {count}</h1>
        <button onClick={clickEventHandler}>Increase</button>
    </div>
  )
}

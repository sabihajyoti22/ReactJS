import React,{useState, useEffect} from 'react'

export default function Hooks_UseEffect() {
    const [count, setCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        console.log("useEffect")
    },[count]) // here dependency is set using count. So isLoading has no effect on it
  return (
    <div>
        {console.log("Rendering")}
        <h1 className="Header" style={{textAlign: "center"}}>Hooks</h1>
        <h1>Count: {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>{setIsLoading(!isLoading)}}>Loading</button>
        
    </div>
  )
}

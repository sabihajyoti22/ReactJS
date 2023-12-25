import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function User() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({name: name, age: age});
        console.log(searchParams.get('name'))
        setName("");
        setAge(0)
    }

  return (
    <div>
        <h1>Query Parameters</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}></input><br/>
            <input type="number" placeholder='Age' value={age} onChange={(e)=>{setAge(e.target.value)}}></input><br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

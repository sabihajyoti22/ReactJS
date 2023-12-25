import React, {useState,useEffect} from 'react'

import "./Style.css"

export default function Search(props) {
    const [search, setSearch] = useState("")

    useEffect(()=>{
        props.onSearch(search)
    },[search])
    
  return (
    <div className='search'>
        <input onChange={(e)=>{
            setSearch(e.target.value)
        }} placeholder='Search Country Here' value={search}></input>
    </div>
  )
}

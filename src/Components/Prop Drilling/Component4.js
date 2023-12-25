import React,{useContext} from 'react'
import {UserContext} from "./UserContext"

export default function Component4() {
    const {user,text} = useContext(UserContext);
    const {name,id} = user
  return (
    <div>
        <h2>{text}</h2>
        <h3>Name: {name}</h3>
        <h4>ID: {id}</h4>
    </div>
  )
}

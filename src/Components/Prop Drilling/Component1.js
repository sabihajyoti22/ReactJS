import React,{useState} from 'react'

import Component2 from './Component2'
import {UserContext} from "./UserContext"

export default function Component1() {
    const [user,setUser] = useState({id:101,name:"Sabiha Nasrin Jyoti"})
    const text = "Hello From Component 1"
  return (
    <UserContext.Provider value={{user,text}}>
        <Component2 />
    </UserContext.Provider>
  )
}

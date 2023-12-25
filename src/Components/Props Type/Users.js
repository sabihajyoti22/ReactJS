import React,{useState} from 'react'
import User from './User'

export default function Users() {
    // const [userName, setUserName] = useState("Sabiha Nasrin Jyoti")
    // const [userId, setUserID] = useState(170104136)
    const [user, setUser] = useState({name:"Sabiha Nasrin Jyoti", id:170104136})
  return (
    <>
        <User user={user} />
    </>
  )
}

import React,{useRef} from 'react'

export default function UseRefExample() {

    const userNameRef = useRef()
    const passwordRef = useRef()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Name: "+ userNameRef.current.value+" Password: "+passwordRef.current.value)

    }
  return (
    <form onSubmit={handleSubmit}>
        <h3>User Info</h3>
        <div>
        <label htmlFor='userName'>Name:</label>
        <input name='userName' id='name' type='text' ref={userNameRef}></input>
        </div>
        <div>
        <label htmlFor='userPassword'>Password:</label>
        <input name='userPassword' id='passwprd' type="password" ref={passwordRef}></input>
        </div>
        <button type="submit" >Register</button>
    </form>
  )
}

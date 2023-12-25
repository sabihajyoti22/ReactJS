import React, {useState} from 'react'

export default function Form() {
    const [userInfo, setUserInfo] = useState({name:"", email:"", password:""});

    const {name, email, password} = userInfo;

    const changeEventHandler = (e) => {
        // setUserInfo((ui)=>
        // {
        //     return{...ui, [e.target.name]:e.target.value} //Here ui is previous state
        // });
        
        if(e.target.name === "Name"){
            setUserInfo({name: e.target.value, email, password})
        }
        if(e.target.name === "Email"){
            setUserInfo({name, email: e.target.value, password})
        }
        if(e.target.name === "Password"){
            setUserInfo({name, email, password: e.target.value})
        }
    }
    const submitEventHandler = (e) => {
        e.preventDefault();
        console.log(userInfo)
    }

  return (
    <div>
        <h1 className="Header" style={{textAlign: "center"}}>Controlled component | Collect form data and UseState with Object</h1>
        <div className='form-container' onSubmit={submitEventHandler}>
            <h1 style={{margin: "40px"}}>Registration</h1>
            <form>
                <div className='form-body'>
                    <label htmlFor='Name'>Name: </label>
                    <input name='Name' type="text" onChange={changeEventHandler}  required/>
                </div>
                <div className='form-body'>
                    <label htmlFor='Email'>Email: </label>
                    <input name='Email' type="Email" onChange={changeEventHandler}  required/>
                </div>
                <div className='form-body'>
                    <label htmlFor='Password'>Password: </label>
                    <input name='Password' type="Password" onChange={changeEventHandler}  required/>
                </div>
                <button type='submit' className='form-button'>Register</button>
            </form>
        </div>
    </div>
  )
}

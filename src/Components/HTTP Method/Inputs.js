import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Inputs = ({onGetData, btnText, editData}) => {
    // const {name, email} = editData;
    const [user,setUser] = useState({
        username : "",
        email: ""
    })
    const {username, email} = user

    useEffect(() => {
        setUser({
          username: editData.name,
          email: editData.email,
        });
      }, [editData]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        onGetData({username,email})
        setUser({
            username : "",
            email: ""
        })
    }
    const handleChange = (e)=>{
        if(e.target.name === "name"){
            setUser({username: e.target.value, email})
        }
        if(e.target.name === "email"){
            setUser({username, email: e.target.value})
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className='fromField'>
            <label>Name:</label>
            <input name='name' type="text" value={username} onChange={handleChange} required/>
        </div>
        <div className='fromField'>
            <label>Email:</label>
            <input name='email' type="text" value={email} onChange={handleChange}  required/>
        </div>
        <button className='btnAll' type='submit'>{btnText}</button>
    </form>
  )
}

Inputs.defaultProps = {
    editData: {
      name: "",
      email: "",
    },
  };

export default Inputs
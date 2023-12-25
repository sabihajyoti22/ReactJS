import React, { useEffect, useState } from 'react'
import Inputs from './Inputs'

import "./Style.css"

export default function Index() {
    const URL = "https://rest-api-without-db.herokuapp.com/users"
    const [userInfo,setUserInfo] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState("")
    const [isEdit, setIsEdit] = useState(false);
    const [userId, setUserId] = useState(null);
    const [selectedUser, setSelectedUser] = useState({name: "", email: ""})

    // Reading Users (Reading Operation)
    const fetchAllData = ()=>{
        fetch(URL)
        .then((res)=>{
            if(!res.ok){
                throw Error("Data Not Found")
            }
            else{
                setIsLoading(true)
                return res.json();
            }
        })
        .then((data)=>{
            setUserInfo(data);
        })
        .catch((error)=>{
            setError(error.message);
        })
    }
    
    useEffect(() => {
            fetchAllData();
    }, []);


    // Adding Users (Create Opeation)
    const addUser = (inputedData) => {
        fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(inputedData),
          })
            .then((res) => {
              if (res.status === 201) {
                fetchAllData();
              } else {
                throw new Error("could not create new user");
              }
            })
            .catch((err) => {
              setError(err.message);
            });
    }

    // Deleting User(Delete Operation)
    const deleteUser = (id) => {

        fetch(URL + `/${id}`, {
            method: "DELETE",
          })
            .then((res) => {
              if (!res.ok) {
                throw Error("could not delete");
              }
              fetchAllData();
            })
            .catch((err) => {
              setError(err.message);
            });
    }

    // Editing Users(Update Operation)
    const editUser = (id)=>{
        setIsEdit(true)
        setUserId(id);
        const filteredData = userInfo.users.filter((data)=> id === data.id)
        setSelectedUser({
            name: filteredData[0].username,
            email: filteredData[0].email
        })
    } 
    
    const handleEditData = (user)=>{
        fetch(URL + `/${userId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => {
              if (!res.ok) {
                throw new Error("failed to update");
              }
              fetchAllData();
              setIsEdit(false);
            })
            .catch((err) => {
              setError(err.message);
            });
    }

  return (
    <div className='container'>
        <h1>User Management APP</h1>

        {!isLoading &&  <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}

        {isEdit ? (<Inputs btnText="Edit User" editData={selectedUser} onGetData={handleEditData}/>) : (<Inputs btnText="Add User" onGetData={addUser}/>)}

        <section className='cardContainer'>
            {userInfo && userInfo.users.map((data)=>{
                const {id, username, email} = data
                return <article className='cardsItems' key={id}>
                    <h4>{username}</h4>
                    <p>{email}</p>
                    <button className='btnAll' onClick={()=>{editUser(id)}}>Edit</button>
                    <button className='btnAll' onClick={()=>{deleteUser(id)}}>Delete</button>
                </article>
            })}
        </section>
       
    </div>
  )
}

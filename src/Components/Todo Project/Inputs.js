import React, {useState} from 'react'

import style from "./Inputs.module.css"

export default function Inputs(props) {
    const [todo, setTodo] = useState({todoTitle: "",todoDesc: ""});
    const inputId = document.querySelector("#todoTitle");
    const inputAreaId = document.querySelector("#todoDesc");

    const changeHandler = (e) => {
        setTodo((previousState)=>{
            return {...previousState,[e.target.name]:e.target.value}
        });
    }

    const formHandler = (e) => {
        e.preventDefault();
        props.onGetData(todo)
        inputId.value = ""
        inputAreaId.value = ""
    }
  return (
    <div>
        <form onSubmit={formHandler}>
            <div>
                <label>Todo Title:</label>
                <input name='todoTitle' type="text" id='todoTitle' className={style.todoTitleInput} onChange={changeHandler} ></input>
                <label className={style.container}>Todo Description:</label>
                <textarea name='todoDesc' type="text" id='todoDesc' className={style.todoDescInput }  onChange={changeHandler} ></textarea>
            </div>
            <button type='Submit' id='todoButton' className={style.todoButton}> Add Todo</button>
        </form>
    </div>
  )
}

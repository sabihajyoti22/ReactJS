import React,{useState} from 'react'

import {v4 as uuid} from "uuid"
import style from "./Home.module.css"
import Card from './Card'
import Inputs from './Inputs'

export default function Home() {
  
const [newData,setData] = useState([])

const getData = (data) =>{
  setData((oldTodo)=>{
    return [...oldTodo, {id:uuid(),data}]
  })
}
const removeItems = (idTodo) => {
  const filteredTodo = newData.filter((todos)=> idTodo !== todos.id )
  setData(filteredTodo)
}
  return (
    <div>
        <div className={style.container}>
          <div>
            <h1 className={style.headerTodo}>Todo App</h1>
            <Inputs onGetData={getData}/>
          </div>

          <Card sendData={newData} onRemoveItems={removeItems}/>
        </div>
    </div>
  )
}

import React from 'react'

import style from "./Card.module.css"
import Todos from './Todos'

export default function Card(props) {
  const data = props.sendData;
  // console.log(props)

  const removeTodo = (id) => {
    props.onRemoveItems(id)
  }
  
  return (
    <div className={style.container}>
        <h1 className={style.headerTodo}>Lists</h1>  
        {data.map((pdata,index)=> <Todos 
        key={pdata.id} 
        getData={pdata.data} 
        id={pdata.id}
        onRemoveTodo={removeTodo}
        />)}
    </div>
  )
}

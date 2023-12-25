import React from 'react'

import style from "./Todos.module.css"

export default function Todos(props) {
  const data = props.getData;
  const {id} = props
  // console.log(props)

  const deleteHandler = (e) => {
    props.onRemoveTodo(e);
  }

  return (
    <div>
        <section className={style.todos}>
            <div className={style.elements}>
              <h6>{data.todoTitle}</h6>
              <p>{data.todoDesc}</p>
            </div>
            <button onClick={()=>{deleteHandler(id)}} className={style.todoButton}><i className='fa-2x fa fa-trash'></i></button>
        </section>
    </div>
  )
}

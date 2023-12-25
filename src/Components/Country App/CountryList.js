import React from 'react'
import {v4 as uuid} from "uuid"

import SetCountry from './SetCountry';
import "./Style.css"


export default function CountryList(props) {
  const removeHandler = (name) =>{
    props.onRemoveCountry(name)
  }
  return (
    <div className='container'>
        {props.countries.map((country)=>{
            const newCountry = {country, id: uuid()};
            return <SetCountry {...newCountry} key={newCountry.id} onRemove={removeHandler} />
        })}
    </div>
  )
}

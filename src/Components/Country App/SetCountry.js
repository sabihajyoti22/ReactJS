import React from 'react'

import "./Style.css"

export default function SetCountry(props) {
    const { name, flags, capital, population, area } = props.country;
  return (
    <div className='card'>
        <img src={flags.png} alt={name.common} height="90px" width="130px"></img>
        <h5>{name.common}</h5>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <button onClick={()=>{props.onRemove(name.common)}}>Remove Country</button>
    </div>
  )
}

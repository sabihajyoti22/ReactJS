import React, {useState} from 'react'

import data from './data'
import FaqSection from './FaqSection'
import style from "./Faq.module.css"

export default function Faq() {
  return (
    <div className={style.outerContainer}>
        <div className={style.innerContainer}>
            <h1>FAQ</h1>
            {data.map((items)=> <FaqSection key={items.id} items={items}/>)}
        </div>
    </div>
  )
}

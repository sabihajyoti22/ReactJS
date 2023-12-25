import React, {useState} from 'react'

import style from "./Faq.module.css"

export default function FaqSection(props) {
    const {id,title,desc} = props.items;
    const [toggle,setToggle] = useState(false);

  return (
    <div className={style.faqSection}>
        <div>
            <h4>{title}</h4>
            {toggle && 
            <p>{desc}</p>}
        </div>
        <button onClick={()=>{setToggle(!toggle)}} className={toggle ? 'fa fa-2x fa-ellipsis-h' :'fa fa-2x fa-question-circle' }></button>
        
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom';

import {blogData} from"./Data"

export default function Blogs() {

    const bodyText = (str, num)=>{
        if(str.length>num){
            return str.slice(0,num)+"...";
        }
        else{
            return str;
        }
    }

  return (
    <div className="routePage">
        <h3>Blogs</h3>
        <section className='blogSection'>
            {blogData.map((data)=>{
                const {id,title,body} = data;
                return <article className='blogArticle' key={id}>
                    <h4>{title}</h4>
                    <p>{bodyText(data.body,298)}</p>
                    <Link className='blogLearnMore' to={title} state={{title,body}}>Learn More</Link>
                </article>
            })}
        </section>
    </div>
  )
}

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
                return <article className='blogArticle' key={data.id}>
                    <h4>{data.title}</h4>
                    <p>{bodyText(data.body,298)}</p>
                    <Link className='blogLearnMore' to={data.title}>Learn More</Link>
                </article>
            })}
        </section>
    </div> 
  )
}

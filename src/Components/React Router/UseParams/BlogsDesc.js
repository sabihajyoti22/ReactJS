import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { blogData } from './Data'

export default function BlogsDesc() {
    const {title} = useParams()
    const [blogBody, setBlogBody] = useState("")

    useEffect(()=>{
        const newBlogData = blogData.filter((data)=>{
            return data.title === title;
        })
        setBlogBody(newBlogData[0].body)
    },[])

  return (
    <div>
        <h3>Blogs</h3>
        <h4>{title}</h4>
        <p>{blogBody}</p>
    </div>
  )
}

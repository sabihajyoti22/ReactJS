import React,{useState} from 'react'

export default function Toggle() {
    const [toggle,setToggle] = useState(true);
  return (
    <div>
        {toggle && 
        <p>Sed elitr diam aliquyam sed lorem diam, amet vero justo ipsum et. Ipsum justo amet sanctus tempor et. Magna voluptua sed aliquyam diam voluptua sed. Accusam sit nonumy kasd sed dolores aliquyam, kasd voluptua rebum labore stet erat elitr dolores justo. Eos et sanctus erat amet consetetur, et rebum duo voluptua sed accusam sed at, sed no consetetur eirmod lorem elitr. Lorem accusam eos sea et et. Magna ipsum et sed sit ipsum est dolor. Accusam clita ipsum clita at lorem et ut ut invidunt. Et amet labore vero nonumy takimata consetetur est sit labore. Dolore sanctus sit lorem elitr.</p>
        } {/* Conditional Rendering--> Short Circuit method */}
        <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "Hide" : "Show"}</button>
    </div>
  )
}

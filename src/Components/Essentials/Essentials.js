import React from 'react'

const reactTitle = "Learning React";
const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

// CSS in Javascript
const styleHeader = {
  color : "white",
  backgroundColor : "purple",
  textAlign : "center",
  padding : "5px"
}

export default function Essentials() {
  return (
    <div>
        {/* react can render only one component at a time*/}
        {/* By using JSX we can use javascript in HTML and in HTML we can use Javascript */}
        <h1>HTML in Javascript and Javascript in HTML</h1>
        <h3>{reactTitle}</h3>
        <p>Vero at elitr sadipscing rebum dolores, sit ipsum diam nonumy stet ea nonumy. Dolor takimata dolore aliquyam labore et et.</p>
        <p>{currentDay +"/"+ currentMonth +"/"+ currentYear}</p>


        {/* By using JSX CSS can be used in Javascript */}
        <h1 style={styleHeader}>CSS in Javascript</h1>
        <h3 className="styleTitle">Hello</h3>
        <p>Vero at elitr sadipscing rebum dolores, sit ipsum diam nonumy stet ea nonumy. Dolor takimata dolore aliquyam labore et et.</p>
        <p>{currentDay +"/"+ currentMonth +"/"+ currentYear}</p>
    </div>
  )
}

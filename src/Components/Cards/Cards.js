import React from 'react'

const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

export default function Cards() {
  return (
    <div>
        <h1 className="Header" style={{textAlign: "center"}}>Creating New Components</h1>
        <div className='cards'>
            <h3 className="cardTitle">Designing a card</h3>
            <p className="cardDesc">Vero at elitr sadipscing rebum dolores, sit ipsum diam nonumy stet ea nonumy. Dolor takimata dolore aliquyam labore et et.</p>
            <p className="cardFooter">{currentDay +"/"+ currentMonth +"/"+ currentYear}</p>
        </div>
  </div>
  )
}

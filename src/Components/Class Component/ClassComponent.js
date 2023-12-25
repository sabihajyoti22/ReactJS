import React, { Component } from 'react'

const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

export default class 
 extends Component {
  render() {
    return (
      <div>
          <h1 className="Header" style={{textAlign: "center"}}>Class Component</h1>
            <div className='cards'>
                <h3 className="cardTitle">{this.props.cardTitle}</h3>
                <p className="cardDesc">{this.props.cardDes+" "}Vero at elitr sadipscing rebum dolores, sit ipsum diam nonumy stet ea nonumy. Dolor takimata dolore aliquyam labore et et.No accusam et consetetur et eos sed sea est magna, erat tempor amet eirmod sit voluptua erat invidunt justo. Et sit no lorem rebum et diam elitr dolore amet, vero at at sit dolore sanctus stet dolor ea. Ipsum magna aliquyam elitr et sit. Voluptua sed gubergren duo kasd no, ipsum rebum ea sit ipsum sed aliquyam. Kasd elitr clita et sit elitr tempor ea ipsum amet. Stet rebum dolores dolor rebum elitr. Diam labore ut aliquyam et et, dolore.</p>
                <p className="cardFooter">{currentDay +"/"+ currentMonth +"/"+ currentYear}</p>
            </div>
      </div>
    )
  }
}


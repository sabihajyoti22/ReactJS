import React, { Component } from 'react'

export default class EventHandlerClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         onChangeValue : ""
      }
    }
    onChangeEvent = (e) => {
        this.setState({
            onChangeValue : e.target.value
        })
    }
    onClickEvent = () => {
        console.log(this.state.onChangeValue)
    }
  render() {
    return (
      <div>
        <h1 className="Header" style={{textAlign: "center"}}>EventHandler | onClick onChange</h1>
        <div className='state-body'>
            <input style={{margin: "10px"}} onChange={this.onChangeEvent}></input>
            <button style={{margin: "10px"}} onClick={this.onClickEvent}>Click Me</button>
            <p style={{color: "white"}}>{this.state.onChangeValue}</p>
        </div>
      </div>
    )
  }
}

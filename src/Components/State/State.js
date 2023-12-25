import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count : 0
        }
      }
      addEventHandler = () => {
        this.setState ({
          count : this.state.count+1
        })
      }
    
      minusEventHandler = () => {
        this.setState ({
          count : this.state.count-1
        })
      }
    
  render() {
    const {count} = this.state
    return (
        <div>
            <h1 className="Header" style={{textAlign: "center"}}>State ,setState and Event Handler</h1>
            <div className="state-body">
                <h1>Count: {count}</h1>
                <button className="state-button" onClick={this.addEventHandler} disabled={count===5 ? true:false}>+</button>
                <button className="state-button" onClick={this.minusEventHandler} disabled={count===0 ? true:false}>-</button>
            </div>
        </div>
    )
  }
}

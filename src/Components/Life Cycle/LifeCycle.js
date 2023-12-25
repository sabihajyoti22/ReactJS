import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
      }
      console.log("Constructor")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    handleClick = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true;
    }
  render() {
      console.log("Render")
    return (
      <div>
          <h2>Count: {this.state.count}</h2>
          <button style={{height:"30px", width:"30px"}} onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

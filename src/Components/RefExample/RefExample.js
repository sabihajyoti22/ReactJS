import React, { Component, createRef } from 'react'

export default class RefExample extends Component {
    constructor(props) {
      super(props)
      this.userNameRef = createRef()
      this.passwordRef = createRef()
      this.state = {}
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Name: "+this.userNameRef.current.value+" Password: "+ this.passwordRef.current.value)
        this.userNameRef.current.style.color="green"
        this.passwordRef.current.style.color="red"

    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <h3>User Info</h3>
          <div>
            <label htmlFor='userName'>Name:</label>
            <input name='userName' id='name' type='text' ref={this.userNameRef}></input>
          </div>
          <div>
            <label htmlFor='userPassword'>Password:</label>
            <input name='userPassword' id='passwprd' type="password" ref={this.passwordRef}></input>
          </div>
          <button type="submit" >Register</button>
      </form>
    )
  }
}

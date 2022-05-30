import React, { Component } from 'react'

export default class UserList extends Component {
    constructor() {
        super()
        this.state = {
            username: "Fauzan"
        }
    }
    
    render() {
      
    const {user} = this.props
    // console.log('user', user)

    return (
      <li>{user.name} - {user.age}</li>
      <li>{user.state.username}</li>
    )
  }
}

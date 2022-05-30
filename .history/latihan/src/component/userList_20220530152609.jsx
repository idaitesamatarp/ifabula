import React, { Component } from 'react'

export default class UserList extends Component {
    constructor() {
        super()
        this.state = {
            username: "Mad"
        }
    }

    render() {  
    const {user} = this.props
    // console.log('user', user)

    return (
      <div>
        <li>{this.props.user.name} - {user.age}</li>
        {/* <li>{this.state.username}</li> */}
      </div>
    )
  }
}

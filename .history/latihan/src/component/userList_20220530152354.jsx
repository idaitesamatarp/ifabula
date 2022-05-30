import React, { Component } from 'react'

export default class UserList extends Component {
  render() {
      constructor() {
          super()
          this.state = {
              username: "Fauzan"
          }
      }
    const {user} = this.props
    // console.log('user', user)

    return (
      <li>{user.name} - {user.age}</li>
    )
  }
}

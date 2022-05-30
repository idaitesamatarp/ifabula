import React, { Component } from 'react'

export default class UserList extends Component {
  render() {
    const {user} = this.props
    return (
      <li>{user.name} - {user.age}</li>
    )
  }
}

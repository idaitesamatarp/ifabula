import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

export default function Home() => {
  let dispatch = useDispatch()

  render() {
    return (
      <>
        <div>Home</div>
        <Link to="/about" className='btn btn-danger'>Go To About</Link>      
      </>
    )
  }
}

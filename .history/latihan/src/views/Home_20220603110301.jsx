import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
getTo

export default function Home() {
  let dispatch = useDispatch()

  return (
    <>
      <div>Home</div>
      <Link to="/about" className='btn btn-danger'>Go To About</Link>      
    </>
  )
}

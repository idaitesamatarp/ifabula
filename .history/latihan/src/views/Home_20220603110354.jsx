import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getTodos } from '../store/features/todoSlice'

export default function Home() {
  let dispatch = useDispatch()
  const [Todo, loading] = useSelector(state => state.Todo);

  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  
  return (
    <>
      <div>Home</div>
      <Link to="/about" className='btn btn-danger'>Go To About</Link>      
    </>
  )
}

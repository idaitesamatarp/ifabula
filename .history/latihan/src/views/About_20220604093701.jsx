import React from 'react'
import { Link } from 'react-router-dom'
import { getMeals } from '../store/features/mealsSlice'
import {useDispatch, }

export default function About() {
  return (
    <>
    <div>About</div>
    <Link to="/" className='btn btn-danger'>Go To Home</Link>      
    </>
  )
}

import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getMeals } from '../store/features/mealsSlice'
import {useDispatch, useSelector} from 'react-redux'

export default function About() {
  let dispatch = useDispatch();

  const {Meals} = useSelector()
  useEffect(() => {
    dispatch(getMeals())
  }, [dispatch])
  
  return (
    <>
    <div>About</div>
    <Link to="/" className='btn btn-danger'>Go To Home</Link>      
    </>
  )
}

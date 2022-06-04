import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getMeals } from '../store/features/mealsSlice'
import {useDispatch, useSelector} from 'react-redux'

export default function About() {
  let dispatch = useDispatch();

  const {Meals} = useSelector((state)=> state.Meals)
  console.log('Meals', Meals)
  
  useEffect(() => {
    dispatch(getMeals())
  }, [dispatch])
  
  return (
    <div><div>About</div>
    <Link to="/" className='btn btn-danger'>Go To Home</Link>      
    {
      Meals.meals.map(meal => {
        return <li key={meal.idMeal}>{meal.strMeal}</li>
      })
    }</div>
  )
}

import logo from "../logo.svg";
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getTodos } from '../store/features/todoSlice'
import '../component/navbar.css'

export default function Home() {
  let navigates = useNavigate();
  let dispatch = useDispatch();

  const {Todos, loading} = useSelector((state) => state.Todo)
  console.log('Todos', Todos)

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="btn btn-primary" onClick={()=>navigates('/about')}>Go To About</button>
      </header>
    </div>
  )
}

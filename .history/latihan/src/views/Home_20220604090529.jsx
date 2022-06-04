import logo from "../logo.svg";
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTodos } from '../store/'
import '../component/navbar.css'
import { useDispatch, useSelector } from "react-redux";
 
export default function Home() {
  let dispatch = useDispatch();
  let navigates = useNavigate();

  const {Todos} = useSelector((state) => state.Todos)
  console.log('Todo', Todos)

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
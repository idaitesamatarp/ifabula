import logo from "../logo.svg";
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getTodos } from '../store/features/todoSlice'
import ""

export default function Home() {
  let [todos, setTodos] = useState([]);
  let navigates = useNavigate();

  useEffect(() => {
  }, []);


  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button className="btn btn-primary" onClick={()=>navigates('/about')}>Go To About</button>
        </header>
      </div>
  )
}

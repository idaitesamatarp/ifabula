import logo from "../logo.svg";
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getTodos } from '../store/features/todoSlice'
import '../component/navbar.css'
 
export default function Home() {
  let dispatch = useDispatch();
  let navigates = useNavigate();

  const {Todos} = useSelector((state) => state.Todos)
  console.log('Todos', Todos)

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="btn btn-primary" onClick={()=>navigates('/about')}>Go To About</button>
        {
          Todos.map(todo => {
            return <li>{todo.title}</li>
          })
        }
      </header>
    </div>
  )
}

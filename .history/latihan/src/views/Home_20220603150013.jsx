import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getTodos } from '../store/features/todoSlice'

export default function Home() {
  \
  return (
    <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hai {name} and Count: {count}.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={() => handleClick()}>Click Me</button>
          {JSON.stringify(todos)}
          {todos.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </header>
      </div>
  )
}

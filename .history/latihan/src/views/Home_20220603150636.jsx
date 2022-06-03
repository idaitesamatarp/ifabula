import logo from "../logo.svg";
import React, { useState, useEffect } from 'react'
import Navbar from "../component/Navbar";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getTodos } from '../store/features/todoSlice'

export default function Home() {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("Adi");
  let [updated, setUpdated] = useState(false);
  let [todos, setTodos] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // if (updated) {
    //   setName("Set " + count);
    // }
    // setUpdated(true);

    // if (count === 5) {
    //   alert("Udah diklik 5x");
    // }

    // fetch API => Dapat dari backend
    // setTodos(arrayTodos) => [] => {todos}
    // fetch Kumpulan User
    fetchTodo();
  }, []);

  const fetchTodo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        // console.log("data", data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

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
          <button className="btn btn-danger" onClick={() => handleClick()}>Click Me</button>
          {todos.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </header>
      </div>
  )
}

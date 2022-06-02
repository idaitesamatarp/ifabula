import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
// import UserList from "./component/UserList";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       id: 1,
//       name: "Adi",
//       age: "22",
//       users: [
//         {
//           id: 2,
//           name: "Tama",
//           age: "21",
//         },
//         {
//           id: 3,
//           name: "Set",
//           age: "23",
//         },
//       ],
//     };
//   }
//   render() {
//     const { name, age, users } = this.state;
//     return (
//       <div>
//         <h1 className="text-3xl font-bold underline">Hello, {name}</h1>
//         <h1>{age}</h1>
//         <ul>
//           <li>name-age</li>
//           {users.map((user) => {
//             /* return (
//               <li key={user.id}>
//                 {user.name} - {user.age}
//               </li>
//             ); */
//             return <UserList user={user} />;
//           })}
//         </ul>
//         {JSON.stringify(users)}
//       </div>
//     );
//   }
// }

function App() {
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
        {/* {JSON.stringify(todos)} */}
        <li></li>
      </header>
    </div>
  );
}

export default App;

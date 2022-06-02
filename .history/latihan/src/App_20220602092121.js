// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import UserList from "./component/UserList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      name: "Adi",
      age: "22",
      users: [
        {
          id: 2,
          name: "Tama",
          age: "21",
        },
        {
          id: 3,
          name: "Set",
          age: "23",
        },
      ],
    };
  }
  render() {
    const { name, age, users } = this.state;
    return (
      <div>
        <h1 className="text-3xl font-bold underline">Hello, {name}</h1>
        <h1>{age}</h1>
        <ul>
          <li>name-age</li>
          {users.map((user) => {
            /* return (
              <li key={user.id}>
                {user.name} - {user.age}
              </li>
            ); */
            return <UserList user={user} />;
          })}
        </ul>
        {JSON.stringify(users)}
      </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;

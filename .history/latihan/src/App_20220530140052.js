// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import userList from "./component/userList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Adi",
      age: "22",
      users: [
        {
          name: "Tama",
          age: "21",
        },
        {
          name: "Set",
          age: "23",
        },
      ],
    };
  }
  render() {
    const { name, age, users } = this.state;
    // console.log("users", users);
    return (
      <div>
        <h1>Hello, {name}</h1>
        <h1>{age}</h1>
        {/* {JSON.stringify(users)} */}
        user
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

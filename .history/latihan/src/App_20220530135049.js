// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Adi",
      age: "22",
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, React</h1>
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

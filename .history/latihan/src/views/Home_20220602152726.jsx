import React from 'react'

export default function Home() {
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
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </header>
    </div>
  )
}

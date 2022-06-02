import logo from "./logo.svg";
import "./App.css";
// import UserList from "./component/UserList";
import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";

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
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

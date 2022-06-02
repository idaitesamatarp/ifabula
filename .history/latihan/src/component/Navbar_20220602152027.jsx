import React from 'react'
import './navbar.css'
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();

  return (
    <div className='container'>
      <button className='btn btn-primary' onClick={() => {navigate("/")}}>Home</button>
      <button className='btn btn-success' onClick={() => {navigate("/about")}}>About</button>
    </div>
  )
}

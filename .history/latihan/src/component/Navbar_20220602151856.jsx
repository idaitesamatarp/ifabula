import React from 'react'
import './navbar.css'
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='container'>
      <button className='btn btn-primary'>Home</button>
      <button className='btn btn-success'>About</button>
    </div>
  )
}

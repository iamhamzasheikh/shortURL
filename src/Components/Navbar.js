import React from 'react'
import "../Assests/Navbar.css"
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  const navigateToHomePage = () =>{
    navigate("/");
  }
  return (
    <>
    <div className="nav-heading">
        <h1 onClick={navigateToHomePage}>Short URL</h1>
    </div>
    </>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import TemporaryDrawer from "./Drawer"
import Button from '../Button/Button'
import "./styles.css"

const Header = () => {
  return (
    <div className='header'>
      <h1>CryptoTracker<span style={{ color: 'var(--blue)' }}>.</span></h1>
      <div className="links">
        <Link to="/">
          <p className='link'>Home</p>
        </Link>
        <Link  to="/compare">
          <p className='link'>Compare</p>
        </Link>
        <Link  to="/watchlist">
          <p className='link'>Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button 
            text = {"DashBoard"}
            outline = {true} 
            onClick={() => console.log("btn clicked")}/>
        </Link>
      </div>
      <TemporaryDrawer />
    </div>
  )
}

export default Header
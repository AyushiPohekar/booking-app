import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import {AuthContext} from '../../Context/AuthContext'

export default function Navbar() {
  const {user } = useContext(AuthContext);
  return (
    <div className='navbar'>
        <div className='navContainer'>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className='logo'><b>BookIT</b></span>
            </Link>
            {user?user.username : (<div className='navItems'>
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>)}
        </div>
    </div>
  )
}

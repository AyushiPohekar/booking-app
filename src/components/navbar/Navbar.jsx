import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import {AuthContext} from '../../Context/AuthContext'

export default function Navbar() {
  const {user,loading, error, dispatch } = useContext(AuthContext);
 const navigate=useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate('/login')
  
  };



  return (
    <div className='navbar'>
        <div className='navContainer'>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className='logo'><b>BookIT</b></span>
            </Link>
            {user?(<div >
                {user.username}
                <button className='navButton' disabled={loading} onClick={handleClick}>Logout</button>
            </div>) : (<div className='navItems'>
                <button className='navButton' onClick={()=>navigate('/signup')}>Register</button>
                <button className='navButton' onClick={()=>navigate('/login')}>Login</button>
            </div>)}
        </div>
    </div>
  )
}

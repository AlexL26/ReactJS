import React from 'react'
import './navbar.css'
import Carwidget from '../../utils/Carwidget'
import Title from '../../utils/titles'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className='nav_container'>
        <div className='nav_title'><Title /></div>
        <div className='nav_logo'><Carwidget/></div>
        <ul className='nav_link_list'>
            <li>
              <Link className="nav_link" to="/">All Pop Star Wars</Link>
            </li>
            <li>
              <Link className="nav_link" to="/Bright Side">Bright Side Pop</Link>
            </li>
            <li>
              <Link className="nav_link" to="/Dark Side">Dark Side Pop</Link>
            </li>
            <li>
              <Link className="nav_link" to="/Troopers">Troopers Pop</Link>
            </li>
            <li>
              <Link className="nav_link" to="/Neutral">Neutral Pop</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
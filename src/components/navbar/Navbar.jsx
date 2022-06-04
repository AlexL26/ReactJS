import React from 'react'
import './navbar.css'
import Carwidget from '../../utils/Carwidget'
import Title from '../../utils/titles'
function Navbar() {
  return (
    <nav className='nav_container'>
        <div className='nav_title'><Title /></div>
        <div className='nav_logo'><Carwidget/></div>
        <ul className='nav_link_list'>
            <li><a href="#" className='nav_link'>All Pop Star Wars</a></li>
            <li><a href="#" className='nav_link'>Brigth Side Pop</a></li>
            <li><a href="#" className='nav_link'>Dark Side Pop</a></li>
            <li><a href="#" className='nav_link'>Troopers Pop</a></li>
            <li><a href="#" className='nav_link'>Neutral Pop</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
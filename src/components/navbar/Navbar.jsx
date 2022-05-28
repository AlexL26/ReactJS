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
            <li><a href="#" className='nav_link'>Cuadernos</a></li>
            <li><a href="#" className='nav_link'>Agendas</a></li>
            <li><a href="#" className='nav_link'>Mates</a></li>
            <li><a href="#" className='nav_link'>Regalos</a></li>
            <li><a href="#" className='nav_link'>Personalizados</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
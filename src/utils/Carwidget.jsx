import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import CartContext from './CartContext';
import { Link } from 'react-router-dom';

function Carwidget() {
  const { numOfProd } = useContext(CartContext)

  console.log(numOfProd)
  return (
    <div>
      <Link to={'/cart'}>
        <FaShoppingCart />
        {numOfProd}
      </Link>
    </div>
  )
}

export default Carwidget
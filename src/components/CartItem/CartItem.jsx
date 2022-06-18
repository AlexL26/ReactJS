import React from 'react'

function CartItem({prop}) {
  return (
    <div>
        <h3>{prop.name}</h3>
        <h3>{prop.side}</h3>
        <h3>{prop.price}</h3>
        <h3>{prop.quantity}</h3>
    </div>
  )
}

export default CartItem
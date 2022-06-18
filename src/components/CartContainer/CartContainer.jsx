import React, { useContext } from 'react'
import CartContext from '../../utils/CartContext'
import CartItem from '../CartItem/CartItem'


function CartContainer() {
    const { cart, removeItem } = useContext(CartContext)

    return (
        <div>
            {cart.length > 0
                ? cart.map(item =>
                    <div>
                        <CartItem prop={item} />
                        <button onClick={()=>removeItem(item.id)}>Borrar</button>
                    </div>
                )
                : <h1>Carrito Vacio</h1>
            }
        </div>
    )
}

export default CartContainer
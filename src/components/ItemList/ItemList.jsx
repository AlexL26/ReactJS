import ItemCards from "../Item/Item"
import React from "react"
import "./itemlist.css"

const CardsList = ({prod}) => {
    return (
        <div>
            <ul className="cardlist_container">
                {prod.map(product => <li key={product.id}><ItemCards  {...product} /></li>)}
            </ul>
        </div>
    )
}

export default CardsList;
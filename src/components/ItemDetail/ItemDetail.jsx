import { showSearchedProduct } from "../../products";
import React, {useContext} from "react";
import './ItemDetail.css'; 
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../utils/CartContext";

export const ItemDetail = ({props}) => {

  const {addItem} = useContext(CartContext)

  function handleAdd(prod, cant){
    const newitem = {...prod, quantity: cant}
    addItem(newitem)
  }


  return (
    <div className="itemdetail_container">

      <div className="leftSide">
        <img src={props.img} alt={props.name} />
      </div>

      <div className="rightSide">
        <h2>
            {props.name}
        </h2>
        <p>
        {props.side}
        </p>
        <h3>
        {props.price}
        </h3>
        <div className="itemCount">
          <ItemCount stock={props.stock} prod={props} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  )
}

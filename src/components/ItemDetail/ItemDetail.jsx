import { showSearchedProduct } from "../../products";
import React from "react";
import './ItemDetail.css'; 

export const ItemDetail = ({props}) => {


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
        <button>Añadir al Carrito</button>
      </div>
    </div>
  )
}

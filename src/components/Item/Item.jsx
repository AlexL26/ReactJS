import React, {useState} from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const ItemCards = (props) => {
    const [showDetail, setShowDetail] = useState(false)
    return (
        <div className="card_container">
            <img src={props.img} alt={props.name}/>
            <p>
            {props.name}
            </p>

            <button onClick={()=>setShowDetail(!showDetail)}><Link className="link" to={`/item/${props.id}`}>Ver Detalles</Link></button>

        </div>
    )
}

export default ItemCards;
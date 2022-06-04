import React, {useState} from "react"
import "./Item.css"

const ItemCards = (props) => {
    const [showDetail, setShowDetail] = useState(false)
    return (
        <div className="card_container">
            <img src={props.img} alt={props.name}/>
            <p>
            {props.name}
            </p>
            <p>
                {showDetail?props.price:''}
            </p>
            <button onClick={()=>setShowDetail(!showDetail)}>{showDetail?"Ocultar":"Ver precio"}</button>
        </div>
    )
}

export default ItemCards;
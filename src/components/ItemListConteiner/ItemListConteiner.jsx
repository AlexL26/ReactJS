import CardsList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import showProduct  from "../../products";
//import './ItemList/itemlist.css'

const ProductList = (props) =>{
    const [prod, getProd]= useState([])

    useEffect(() => {
        showProduct().then(response => {
            getProd(response)
            return true
        }).catch(() => {
            return(console.log("algo paso pero no paso lo que yo queria que pase"))
        })
    }, [])

    return(
        <div>
            {prod.length>0?<CardsList prod={prod} />:<h1>Loading...</h1>}
        </div>
    )
}

export default ProductList;
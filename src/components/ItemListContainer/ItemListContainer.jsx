import CardsList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import  {showProduct}  from "../../products";
import { useParams } from "react-router-dom";
const ItemListContainer = (props) =>{
    const [prod, setProd]= useState([])
    const [loading, setLoading]= useState(true)

    const {side} = useParams()

    useEffect(()=>{
        setLoading(true)
        showProduct(side).then((response)=>{
            setProd(response)
            return true
        }).catch((error)=>{
            console.log('Error...',error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [side])

    return(
        <div>
            {loading ? <h1>Loading...</h1> : <CardsList prod={prod} />}
        </div>
    )
}

export default ItemListContainer;
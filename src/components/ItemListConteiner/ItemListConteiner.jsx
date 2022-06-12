import CardsList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import  {showProduct, showGroupFaction }  from "../../products";
//import './ItemList/itemlist.css'
import { useParams } from "react-router-dom";
const ItemListContainer = (props) =>{
    const [prod, setProd]= useState([])
    const [prodSide, setProdSide]= useState([])

    let param = useParams()


    useEffect(()=>{
        Object.keys(param).length==0?
        showProduct().then(response => {
            setProd(response)
            return true
        }).catch(() => {
            return(console.log("algo paso pero no paso lo que yo queria que pase"))
        })
        :
        showGroupFaction(param.side).then(response =>{
            setProdSide(response)
            return true
        }).catch(error => console.log(error))
    }, [param])

    return(
        <div>

            {
                Object.keys(param).length>0?<CardsList prod={prodSide}/>
                :prod.length>0?<CardsList prod={prod} />:<h1>Loading...</h1>
            }
        </div>
    )
}

export default ItemListContainer;
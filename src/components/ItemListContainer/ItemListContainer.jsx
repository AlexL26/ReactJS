import CardsList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import  {showProduct}  from "../../products";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainer = (props) =>{
    const [prod, setProd]= useState([])
    const [loading, setLoading]= useState(true)

    const {side} = useParams()

    useEffect(()=>{
        setLoading(true)

        const collectionRef = side ? (
            query(collection(db, 'items'), where('side', '==', side))
        ) : (collection(db, 'items'))

        getDocs(collectionRef).then(response =>{
            const itemsFB = response.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            setProd(itemsFB)
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
        // showProduct(side).then((response)=>{
        //     setProd(response)
        //     return true
        // }).catch((error)=>{
        //     console.log('Error...',error)
        // }).finally(()=>{
        //     setLoading(false)
        // })
    }, [side])

    return(
        <div>
            {loading ? <h1>Loading...</h1> : <CardsList prod={prod} />}
        </div>
    )
}

export default ItemListContainer;
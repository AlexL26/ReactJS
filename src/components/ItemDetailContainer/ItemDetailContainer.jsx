import React, { useEffect, useState } from 'react'
import { showSearchedProduct } from '../../products'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [showById, setShowById] = useState(false)

    let params = useParams();


    useEffect (()=> {

        showSearchedProduct(params.id).then(response => {
            setShowById(response)
        })

    },[])
    

  return (
    <div>
        {showById?<ItemDetail props={showById}/>:<h1>Loading...</h1>}
        
    </div>
  )
}

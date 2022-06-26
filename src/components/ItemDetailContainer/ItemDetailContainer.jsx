import React, { useEffect, useState } from 'react'
import { showSearchedProduct } from '../../products'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

export const ItemDetailContainer = () => {

    const [showById, setShowById] = useState(false)

    const { params } = useParams();


    useEffect (()=> {

      const docRef = doc(db, 'items', params)
    getDoc(docRef).then(doc =>{
      const productFB = {id: doc.id, ...doc.data()}
      setShowById(productFB)
    }).catch(error =>{
      console.log(error)
    })
        // showSearchedProduct(params.id).then(response => {
        //     setShowById(response)
        // })

    },[params])
    

  return (
    <div>
        {showById?<ItemDetail props={showById}/>:<h1>Loading...</h1>}
        
    </div>
  )
}

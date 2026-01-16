import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const [product ,setProduct]=useState({})
    const {id}=useParams()

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            setProduct(data)
        })
    },[])
  return (
    <div>
        <h1>ProductDetail</h1>
        <p>{product.title}</p>
        <img src={product.image}/>
    </div>
  )
}

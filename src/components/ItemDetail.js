import React from 'react'
import {Routes,Route, useParams}from "react-router-dom"

const ItemDetail = () => {
   let {itemId}=useParams();
  return (
    <div><h1>Item {itemId}</h1>
    
    <br></br>
    <p>Description for Item {itemId}</p></div>
  )
}

export default ItemDetail
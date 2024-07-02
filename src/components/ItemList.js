import React from 'react'
import {Routes,Route,Link}from "react-router-dom"
import ItemDetail from './ItemDetail'

const ItemList = () => {
    const items=[{Id:"1",desc:"Item 1"},{Id:"2",desc:"Item 2"},{Id:"3",desc:"Item 3"}]
  return (
    <div><h1>Item List</h1>
    {<ul>
        
        
        {
            items.map((item)=>{
              return  <li><Link to={`/items/${item.Id}`}>{item.desc}</Link></li>
            })
        }
        </ul>}
    
    
    
    
    </div>
    
  )
}

export default ItemList
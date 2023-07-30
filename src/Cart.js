import React, { useState } from 'react'
import style from "../src/Components/Css/cart.module.css"
import {MdDelete} from "react-icons/md";
function Cart({store,setStore,total}) {
 const inc=(y)=>{
    setStore(store.map((item)=>{
    return item==y ?{...item,qty: item.qty +1}:item
    }))
 }
 const dec=(y)=>{
  if(y.qty>1){
        setStore(store.map((item)=>{
        return item==y ?{...item,qty: item.qty -1}:item
        }))
      }
 }
 const remove=(a)=>{
   setStore(store.filter(b=>(b.name!=a.name)))
 }



  return (
    <>
  <div className={style.carts}>
    {
    store.map(item=>(
        <>
        
        <div className={style.card} key={item.name}>
            <img className={style.imgg}src={item.image}/>
            <div className={style.right}>
              <p className={style.names}>{item.name}</p>
              <p className={style.contn}>{item.price}</p>
                    <div className={style.qty}>
                      <button className={style.incc} onClick={()=>inc(item)}>+</button>
                      <input type="text " value={item.qty} onChange={()=>{}} className={style.input}/>
                      <button className={style.decc} onClick={()=>dec(item)}>-</button>
                      <MdDelete onClick={()=>remove(item)}/>
                    </div>
            </div>
        </div>
        </>
    ))
    }
  
   </div>
   <h4 className={style.catz}>Total: ₹ {total}</h4>
    </>
  )
    
}

export default Cart
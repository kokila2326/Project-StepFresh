import React, { useState } from 'react'
import style from "../src/Components/Css/cart.module.css"
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom'
import cartemp from '../src/Components/Images/cartempty.jpg'
import { TiDelete } from "react-icons/ti";
import DeleteIcon from '@mui/icons-material/Delete';
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
 const remove = (selectedItem) => {
  setStore((prevStore) => prevStore.filter(item => item !== selectedItem));
};


 
  return (
    <div className={style.wholecart}>
    <div className={style.cartemp}>
      {store.length===0 &&
            <div className={style.halfcart}>
              <img className={style.cartempimg} src={cartemp}/>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you Haven't added anything to your cart</p>
            <Link className={style.startexp}to ="/category" >Start Exploring</Link>
            </div>
      }
    
    </div>
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
                              <button className={style.decc} onClick={()=>dec(item)}>-</button>
                              <input type="text " value={item.qty} onChange={()=>{}} className={style.input}/>
                              <button className={style.incc} onClick={()=>inc(item)}>+</button>
                              <DeleteIcon className={style.md} onClick={()=>remove(item)}/> 
                            </div>
                    </div>
                  </div>
                </>
                
    ))
    }
                  <h4 className={style.catz}>Total: ₹ {total}</h4>
                  <div className={style.addss}>
                    <Link className={style.payment}to ="/payment" >buy now</Link>
                  </div>
             </div>
  
 
    </div>
  )
    
}

export default Cart
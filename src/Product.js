import React from 'react'
import style from "./Components/Css/vegetable.module.css"



function Product({fru,add}) {
  return (
    <>
    {
        fru.map(x=>(
            <>
            <div className={style.card}>
                  <img className={style.imgg}src={x.image}/>
                  <div className={style.right}>
                  <p className={style.names}>{x.name}</p>
                  <p className={style.contn}> ₹{x.price}</p>
                  <button className={style.cart} onClick={()=>add(x)}>Add to Cart</button>
                  </div>
            </div>
            </>
        ))
        }
        
        </>
  )
}

export default Product
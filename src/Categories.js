import React from 'react'
import { Link } from 'react-router-dom'
import style from "../src/Components/Css/category.module.css"
import cat1 from '../src/Components/Images/cat1.jpg'
import cat2 from '../src/Components/Images/cat2.jpg'
import cat3 from '../src/Components/Images/cat3.jpg'
import cat4 from '../src/Components/Images/cat4.jpg'
function Categories() {
  return (
    <>
        <div className={style.box}>
              <div className={style.cat1}>
                <img src={cat1}/>
                <Link className={style.boxs} to='/Vegetable'> Vegetable</Link> 
              </div>
              <div className={style.cat1}>
                <img src={cat2}/>
                <Link className={style.boxs} to='/Fruits'> Fruits</Link>  
              </div>
              <div  className={style.cat1}>
                <img src={cat3}/>
                <Link className={style.boxs} to='/Sweets'> Sweets</Link>    
              </div> 
              <div  className={style.cat1}>
                <img src={cat4}/>
                <Link className={style.boxs} to='/Biscuits'>Biscuits</Link>
              </div>
        </div>
    </>
  )
}

export default Categories
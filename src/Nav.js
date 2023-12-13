import React from 'react'
import style from "../src/Components/Css/nav.module.css"
import { Link } from 'react-router-dom'
import {BiSolidCart} from 'react-icons/bi'
import logo from '../src/Components/Images/ezgif-3-2e0842cd19.gif'
function Nav({store}) {
  return (
    <div className={style.items}>
        <img src={logo} className={style.logoo}/>
     
    <Link className={style.item} to ="/Project-StepFresh/" >Home</Link>
    <Link className={style.item} to ="/category">Category</Link>
    <Link className={style.item} to="/cart"><BiSolidCart className={style.catrzz}/>Cart<span className={style.cartno}>{store.length}</span></Link>
    <Link className={style.item} to="/account">Account</Link>
    
    </div>
  )
}

export default Nav
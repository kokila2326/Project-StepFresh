import React, { useEffect, useState } from 'react'
import tomato from '../src/Components/Images/tomato.jpg'
import potato from '../src/Components/Images/potato.jpg'
import onion from '../src/Components/Images/onion.jpg'
import ginger from '../src/Components/Images/ginger.jpg'
import carrot from '../src/Components/Images/carrot.jpg'
import mushroom from '../src/Components/Images/mushroom.jpg'
import cauliflower from '../src/Components/Images/cauliflower.jpg'
import beans from '../src/Components/Images/beans.jpg'
import cucumber from '../src/Components/Images/cucumber.jpg'
import capsicum from '../src/Components/Images/capsicum.jpg'
import radish from '../src/Components/Images/radish.jpg'
import garlic from '../src/Components/Images/garlic.jpg'
import style from "../src/Components/Css/vegetable.module.css"
import Product from './Product'





function Vegetable({add,setSearch}) {
    const [vege,setVege]=useState([
        {
           name : "Tomato",
           price : "70",
           image: tomato

        },
        {
            name: "Onion",
            price: "34",
            image: onion
        },
        {
            name: "Ginger",
            price: "77",
            image: ginger
        },
        {
            name: "Carrot",
            price: "68",
            image: carrot
        },
        {
            name: "Mushroom",
            price: "34",
            image: mushroom
        },
        {
            name: "Cauliflower",
            price: "48",
            image: cauliflower
        },
        {
            name: "Beans",
            price: "43",
            image: beans
        },
        {
            name: "Garlic",
            price: "52",
            image: garlic
        },
        {
            name: "Potato",
            price: "40",
            image: potato
        },
        {
            name: "Cucumber",
            price: "41",
            image: cucumber
        },
        {
            name: "Capsicum",
            price: "₹66",
            image: capsicum
        },
        {
            name: "Radish",
            price: "₹33",
            image: radish
        }
    ])
    const [stores,setStore]=useState("")
    const [actdata,setActdata]=useState(vege)
     const save=(x)=>{
        setStore(x)
     }
   
     useEffect(()=>{
        setActdata(vege.filter(item=>item.name.toLowerCase().startsWith(stores.toLowerCase())))
     },[stores])
  return (
    <>
    <div className={style.searchbar}>
        <input className={style.searchinput} type="text" placeholder="search any product" onChange={(event)=>save(event.target.value)}/>
    </div>
    <div className={style.topics}>Vegetable</div><br></br>
    <div className={style.container}>
    <Product fru={actdata} add={add} />
    </div>
   
    </>
  
  )
}

export default Vegetable
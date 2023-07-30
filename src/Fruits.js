import React, { useEffect, useState } from 'react'
import strawberry from '../src/Components/Images/strawberry.jpg'
import apple from '../src/Components/Images/apple.jpg'
import pineapple from '../src/Components/Images/pineapple.jpg'
import banana from '../src/Components/Images/a3370bfbc03bc8de595f417f08f7fa5e.jpg'
import avacado from '../src/Components/Images/avacado.png'
import papaya from '../src/Components/Images/papaya.jpg'
import pomegranate from '../src/Components/Images/pomegranate.jpg'
import watermelon from '../src/Components/Images/a73b5881d766d7e2c462602dafacae9d.jpg'
import mosambi from '../src/Components/Images/Mosambi juice for weight loss.jpeg'
import guava from '../src/Components/Images/guava.jpg'
import muskmelon from '../src/Components/Images/46833768905fb1c1b9a0a6d7dad44121.jpg'
import orange from '../src/Components/Images/orange1.jpg'
import grapes from '../src/Components/Images/grapes.jpg'
import cherry from '../src/Components/Images/berry.jpg'
import style from "../src/Components/Css/vegetable.module.css"
import Product from './Product'

function Fruits({add}) {
  const [fru,setfru]=useState([
    {
        name: "Apple",
        price: "175 ",
        image: apple
  },
  {
    name: "Pineapple",
    price: "85",
    image: pineapple
},
{
  name: "Strawberry",
  price: "149 ",
  image: strawberry 
},
{
  name: "Banana",
  price: "49 ",
  image: banana
},
{
  name: "avocado",
  price: "75 ",
  image: avacado
},
{
  name: "papaya",
  price: "72",
  image: papaya
},
{
  name: "pomegranate",
  price: "143 ",
  image: pomegranate
},
{
  name: "watermelon",
  price: "115 ",
  image: watermelon
},
{
  name: "mosambi",
  price: "53",
  image: mosambi
},
{
  name: "guava",
  price: "57",
  image: guava
},
{
  name: "grapes",
  price: "132",
  image: grapes
},
{
  name: "muskmelon",
  price: "40",
  image: muskmelon
},
{
  name: "orange",
  price: "47",
  image:  orange
},
{
  name: "cherry",
  price: "253",
  image: cherry
}
])
const [stores,setStore]=useState("")
const [actdata,setActdata]=useState(fru)
 const save=(x)=>{
    setStore(x)
 }

 useEffect(()=>{
    setActdata(fru.filter(item=>item.name.toLowerCase().startsWith(stores.toLowerCase())))
 },[stores])
  return (
    <>
    <div className={style.searchbar}>
        <input className={style.searchinput} type="text" placeholder="search any product" onChange={(event)=>save(event.target.value)}/>
    </div>
    <div className={style.topics}>Fruits</div><br></br>
    <div className={style.container}>
    <Product fru={actdata} add={add}/>
    </div>
    </>
  )
}

export default Fruits
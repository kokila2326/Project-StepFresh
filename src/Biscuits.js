import React, { useEffect, useState } from 'react'

import marie from '../src/Components/Images/marie.jpeg'
import nicetime from '../src/Components/Images/nicetime.jpeg'
import momsmagic from '../src/Components/Images/momsmagic.webp'
import monaco from '../src/Components/Images/monaco.webp'
import fab from '../src/Components/Images/fab.webp'
import darkfantacy from '../src/Components/Images/darkfantacy.webp'
import bourbon from '../src/Components/Images/bourbon.webp'
import nutrichoice from '../src/Components/Images/nutrichoice.webp'
import oreo from '../src/Components/Images/oreo.jpeg'
import waffer from '../src/Components/Images/waffer.jpeg'
import unibic from '../src/Components/Images/unibic.jpeg'
import lotte from '../src/Components/Images/lotte.webp'
import style from "../src/Components/Css/vegetable.module.css"
import Product from './Product'

function Biscuits({add}) {
  const [biscuits,setfru]=useState([
    {
        name: "lotte",
        price: "30 ",
        image: lotte
  },
  {
    name: "Unibic",
    price: "85",
    image: unibic
},
{
  name: "waffy",
  price: "149 ",
  image: waffer 
},
{
  name: "Oreo",
  price: "49 ",
  image: oreo
},
{
  name: "Nutri choice",
  price: "75 ",
  image: nutrichoice
},
{
  name: "bourbon",
  price: "72",
  image: bourbon
},
{
  name: "darkfantacy",
  price: "143 ",
  image: darkfantacy
},
{
  name: "fab",
  price: "115 ",
  image: fab
},
{
  name: "monaco",
  price: "53",
  image: monaco
},
{
  name: "momsmagic",
  price: "57",
  image: momsmagic
},
{
  name: "nicetime",
  price: "132",
  image: nicetime
},
{
  name: "marie",
  price: "40",
  image: marie
}


])
const [stores,setStore]=useState("")
    const [actdata,setActdata]=useState(biscuits)
     const save=(x)=>{
        setStore(x)
     }
     useEffect(()=>{
        setActdata(biscuits.filter(item=>item.name.toLowerCase().startsWith(stores.toLowerCase())))
     },[stores])
  return (
    <>
     <div className={style.searchbar}>
        <input className={style.searchinput} type="text" placeholder="search any product" onChange={(event)=>save(event.target.value)}/>
    </div>
    <div className={style.topics}>Biscuits</div><br></br>
    <div className={style.container}>
    <Product fru={actdata} add={add} />
    </div>
    </>
  )
}

export default Biscuits

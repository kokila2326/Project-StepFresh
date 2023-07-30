import React,{useEffect, useState} from 'react'
import style from "../src/Components/Css/vegetable.module.css"
import Product from './Product'
import blackcurrent from '../src/Components/Images/CUPS-125ML-WITH-SCOOP-BLACKCURRANT.jpg'
import casata from '../src/Components/Images/casata-slice.jpg'
import mangocup from '../src/Components/Images/CUPS-125ML-WITH-SCOOP-MANGO.jpg'
import chocomini from '../src/Components/Images/chocomini.webp'
import cmilk from '../src/Components/Images/cmilk.webp'
import redvelvet from '../src/Components/Images/Bite-Red-Velvet.png'
import icebar from '../src/Components/Images/neopolitanbar.png'
import spiral from '../src/Components/Images/spiral-wildberry-vanilla-pinepple.jpg'
import twix from '../src/Components/Images/twix.jpeg'
import yoghurt from '../src/Components/Images/yoghrut.jpeg'
import vanilla from '../src/Components/Images/vanilla.jpg'
function Sweets({add}) {

 const [swee,setfru]=useState([
    {
        name: "Black current ",
        price: "175",
        image: blackcurrent
  },
  {
    name: "Casata slice",
    price: "85",
    image: casata
},
{
  name: "Mango ice",
  price: "149 ",
  image: mangocup 
},
{
  name: "Choco mini",
  price: "149 ",
  image: chocomini 
},
{
  name: "Condensded milk",
  price: "149",
  image: cmilk 
},
{
  name: "Arun ice bar",
  price: "149 ",
  image: icebar 
},
{
  name: "spiral ice",
  price: "149",
  image: spiral 
},
{
  name: "Twix",
  price: "149 ",
  image: twix 
},
{
  name: "redvelvet",
  price: "10 ",
  image:redvelvet 
},
{
  name: "Yoghurt - Berry",
  price: "149 ",
  image: yoghurt
},
{
  name: "Vanilla bar",
  price: "149 ",
  image: vanilla 
},

])
const [stores,setStore]=useState("")
    const [actdata,setActdata]=useState(swee)
     const save=(x)=>{
        setStore(x)
     }
     useEffect(()=>{
        setActdata(swee.filter(item=>item.name.toLowerCase().startsWith(stores.toLowerCase())))
     },[stores])
  return (
    <>
    <div className={style.searchbar}>
        <input className={style.searchinput} type="text" placeholder="search any product" onChange={(event)=>save(event.target.value)}/>
    </div>
    <div className={style.topics}>Sweets</div><br></br>
    <div className={style.container}>
    <Product fru={actdata} add={add} />
    </div>
    </>
  )
}

export default Sweets
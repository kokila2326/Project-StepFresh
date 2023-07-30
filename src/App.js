import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Nav'
import Categories from './Categories'
import Cart from './Cart'
import Account from './Account'
import Home from './Home'
import Vegetable from './Vegetable'
import Fruits from './Fruits' 
import Sweets from './Sweets'
import Biscuits from './Biscuits'
import Footer from './Footer'
import Aboutus from './Aboutus'
import Faq from './Faq'
import Howworks from './Howworks'
import Contact from './Contact'
import Careers from './Careers'
import Locate from './Locate'

function App() {

  const[loading,setLoading]=useState(true)
  const spinner =document.getElementById('spinner');
  if (spinner){
    setTimeout(()=>{
      spinner.style.display="none";
      setLoading(false);
    },2000) 
  }   
const [search,setSearch]=useState()
const [store,setStore]=useState([])
const [total,setTotal]=useState(0)
const calc=()=>{
  var total=0  
  store.forEach(element => {
       total=total+element.price*element.qty
  });
  return total
 }
const add=(x)=>{
  setStore([...store,{...x,qty:1}])
  
}
useEffect(()=>{
  setTotal(calc())
},[store])


     



  return (
    !loading &&(
   <Router>
    <Nav/>
    <Routes>
      <Route path="/" exact element ={<Home/>}/>
      <Route path="/category" exact element ={<Categories/>}/>
      <Route path="/cart" exact element ={<Cart setStore={setStore} store={store} total={total}/>}/>
      <Route path="/account" exact element ={<Account/>}/>
      <Route path="/vegetable"exact element={<Vegetable add={add} />}/>
      <Route path="/Fruits"exact element={<Fruits add={add}/>}/>
      <Route path="/Sweets"exact element={<Sweets add={add}/>}/>
      <Route path="/Biscuits"exact element={<Biscuits add={add}/>}/>
      <Route path="/Aboutus"exact element={<Aboutus/>}/>
      <Route path="/Faq"exact element={<Faq/>}/>
      <Route path="/Howworks"exact element={<Howworks/>}/>
      <Route path="/Contact"exact element={<Contact/>}/>
      <Route path="/Careers"exact element={<Careers/>}/>
      <Route path="/Locate"exact element={<Locate/>}/>
    </Routes>
    <Footer/>
   </Router>)
  )
}

export default App

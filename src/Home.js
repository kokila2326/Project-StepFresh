import React from 'react'
import slide1 from '../src/Components/Images/slide1.webp'
import slide2 from '../src/Components/Images/slides1.webp'
import slide3 from '../src/Components/Images/slides2.webp'
import style from "../src/Components/Css/home.module.css"
import mainpic from '../src/Components/Images/download-app.png'
import android from '../src/Components/Images/download-android.png'
import ios from '../src/Components/Images/download-ios.png'
import con1 from '../src/Components/Images/con2.jpg'
import con2 from "../src/Components/Images/con2.jpg"
import con3 from "../src/Components/Images/con2.jpg"
import con4 from "../src/Components/Images/con2.jpg"

function Home() {
  
  return (
    <>
    <div className={style.container}>
      <div className={style.imgg}>
        <img src={slide1}/>
        <img src={slide2}/>
        <img src={slide3}/>
        <img src={slide1}/>
      </div><br></br><br></br>
    </div>
    <div className={style.homecontent}>
        <img scr={con1}/>
        <img scr={con2}/>
        <img scr={con3}/>
        <img scr={con4}/>
      </div>
    <div className={style.smallcont}>
        <p>Explore our range of over <mark>200 products with us!! </mark></p>
    </div>
    <div className={style.downloadapp}>
      <div className={style.content}>
        <h1 className={style.heading}> Download the app</h1>
        <p className={style.wordings}>The only freshly picked fruits and vegetables delivery service you'll ever need. Download the app and start filling up the cart today!</p>
          <div className={style.butn}>
             <img src={ios}/>
             <img className={style.and} src={android}/>
          </div>
      </div>
      <div className={style.picture}>
            <img src={mainpic}/>
      </div>
     
    </div>
    
    </>

  )
}


export default Home;
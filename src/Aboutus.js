import React from 'react'
import style from '../src/Components/Css/about.module.css'
import img1 from '../src/Components/Images/con2.jpg'
import img2 from '../src/Components/Images/content1.jpg'
import img3 from '../src/Components/Images/content3.jpg'

function Aboutus() {
  return (
    <div className={style.aboutuscontainer}>
      <div className={style.logocontainer}>
      <img
        className={style.logoimage}
        src={img1}  // Replace with the actual image source
        
      />
      <img
        className={style.logoimage}
        src={img2} // Replace with the actual image source
        
      />
      <img
        className={style.logoimage}
        src={img3} // Replace with the actual image source
        
      />
      </div>
      <h1>Welcome to step fresh</h1>

      <div className={style.section}>
        <h2>Our Story</h2>
        <p>
          At step fresh, our story is woven with a passion for quality and a commitment to your well-being. Founded in [year], we embarked on a journey to transform the way you experience grocery shopping. Guided by a vision of convenience without compromise, we've curated a selection that reflects our dedication to excellence.
        </p>
      </div>

      <div className={style.section}>
        <h2>Our Mission</h2>
        <p>
          Our mission is deeply rooted in the belief that everyone deserves access to fresh, high-quality groceries. We aspire to be more than just your preferred online grocery store – we aim to be your reliable partner in nourishing your lifestyle. From kitchen essentials to gourmet delights, we strive to elevate your culinary experience with every order.
        </p>
      </div>

      <div className={style.section}>
        <h2>Quality You Can Trust</h2>
        <p>
          Quality is the cornerstone of step fresh. We forge direct relationships with local farmers, trusted suppliers, and renowned brands to ensure that every product meets and exceeds your expectations. From farm-fresh produce to pantry staples, we stand by the principle that your satisfaction is our guarantee of excellence.
        </p>
      </div>

      <div className={style.section}>
        <h2>Convenience Redefined</h2>
        <p>
          Embrace a new era of convenience with step fresh. Bid farewell to long queues and heavy bags our user-friendly website and mobile app empower you to effortlessly browse, select, and order your groceries with just a few clicks. Customize your delivery preferences, and let us handle the rest while you savor the ease of modern grocery shopping.
        </p>
      </div>

      <div className={style.section}>
        <h2>Community Matters</h2>
        <p>
          Beyond being a virtual grocery store, we are proud members of your community. step fresh is committed to supporting local initiatives, minimizing our environmental footprint, and giving back to the neighborhoods we serve. Together, with your support, we can make a positive impact that resonates far beyond the realm of groceries.
        </p>
      </div>

      <div className={style.section}>
        <h2>Join Us on This Journey</h2>
        <p>
          As you embark on your culinary adventures, thank you for choosing step fresh. Whether you're a discerning chef, a health-conscious individual, or a busy household, we invite you to join us on this journey of redefining the way you shop for groceries. Your satisfaction fuels our commitment to excellence.
        </p>
      </div>

      <footer className={style.footer}>
        <p>For inquiries, feedback, or just to say hello, [contact us here].</p>
        <p>Happy shopping!</p>
      </footer>
    </div>
  )
}

export default Aboutus
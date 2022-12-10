import React from 'react';
import heroImage from '../assets/pizza.jpeg'
import '../styles/Home.css'


function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${heroImage})`}}>
      <div className='headerContainer' >
         <h1>Imbari's Pizza</h1> 
        <p>LET'S GIVE YOU A TASTE OF HEAVEN &#128523;</p>
      </div>
    </div>
  )
}

export default Home
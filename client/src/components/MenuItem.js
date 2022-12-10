import React from 'react'


function MenuItem({image, name, price}) {
  return (
    <div className='menuItem'>
        <div className='menu-pic' style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>Kes. {price}</p>
        <button className='buy' >Buy now</button>
        <button className='review'>Review</button>
        
        
        
    </div>
  )
}

export default MenuItem
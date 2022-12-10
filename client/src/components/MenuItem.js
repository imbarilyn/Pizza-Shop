import React from 'react'
import { useNavigate } from 'react-router-dom'



function MenuItem({image, name, price}) {
  const navigate = useNavigate()
  return (
    <div className='menuItem'>
        <div className='menu-pic' style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>Kes. {price}</p>
        <button className='buy' >Buy now</button>
        <button className='review' onClick={() => navigate('/review_form')}>Review</button>
        
        
        
    </div>
  )
}

export default MenuItem
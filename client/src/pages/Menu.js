import React, { useEffect, useState } from 'react'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'



function Menu() {

  const [pizza, setPizza] = useState([])
  useEffect(()=>{
    fetch('/pizzas')
    .then(resp => resp.json())
    .then(pizzas => setPizza(pizzas))
  }, [])



  const menuList = pizza.map((pizzaItem, key) =>{
    return <MenuItem key ={key} name = {pizzaItem.name} price = {pizzaItem.price} image ={pizzaItem.image_url} /> 
  })
  return (
    <div className="menu">
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'>
        {menuList}

      </div>
    </div>
  )
}

export default Menu
import React, { useState }from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'
import ReorderIcon from '@material-ui/icons/Reorder';
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined} from  '@material-ui/icons'
import { useNavigate } from 'react-router-dom';

function NavBar({ user }) {
  const [openLinks, setOpenLinks] = useState(false)
  const navigate = useNavigate();

  return (
    <div className='navbar'>
        <div className='leftSide' id = {openLinks? "open": "close"}>
            <img src= {Logo} alt ="pizza logo" />
            <div className = 'hiddenLinks'>
              <Link to= '/'>Home</Link>
              {user?(
              <Link to ='/'>Log out</Link>
              ):(
                <Link to = '/login'>Login</Link>
              )
              }
            </div>
        </div>
        <div className='rightSide'>
          <Link to= '/'>Home</Link>
          { user? (
          <Link to ='/'>Login out</Link>
          ):(
            <Link to ='/login'>Login</Link>
          )
          }
          <Badge badgeContent={3} color="primary">
            <ShoppingCartOutlined style={{color: "white"}} onClick = {() => navigate("/menu")}/>
          </Badge>

          <button onClick={() => setOpenLinks(!openLinks)}>
          <ReorderIcon />
          </button>
          
        </div>

    </div>
  )
}

export default NavBar
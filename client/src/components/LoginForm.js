import React, { useState } from 'react'
import Error from '../pages/Error'
import '../styles/Login.css'
import { useNavigate, Link } from 'react-router-dom'

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate  = useNavigate()
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  
    return (
        <div className='wrapper' >
        <form class="container" onSubmit={handleSubmit}>
          <p class="heading">Login</p>
          <div class="box">
            <p>Username</p>
            <div>
              <input 
                type="text"
                id = "username"
                autocomplete="off"
                value = {username}
                placeholder="Enter your username"
                onChange={(e) =>setUsername(e.target.value)}
              /> 
            </div>
          </div>
          <div class="box">
            <p>Password</p>
            <div>
              <input 
                type="password"
                id="password"
                autocomplete="off"
                value={password}
                placeholder="Enter your password"
                onChange = {(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className = "loginBtn" onClick={()=> navigate('/menu')} >Login</button>
          <Link to= "/sign_up" >Sign up</Link>
        </form>       
      </div> 
    );
  }
  
  export default LoginForm;
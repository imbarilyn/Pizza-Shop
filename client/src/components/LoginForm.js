import React, { useState } from 'react'
import Error from '../pages/Error'
import '../styles/Login.css'
import { useNavigate, Link } from 'react-router-dom'

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate  = useNavigate()
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  
    return (

        <div className='wrapper' >
        <form className="container" onSubmit={handleSubmit}>
          <p className="heading">Login</p>
          <div className="box">
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
          <div className="box">
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
          <button type="submit" className = "loginBtn">Login</button>
          {errors.map((err) => (
            <p>{err}</p>
          ))}
        </form>       
      </div> 
    );
  }
  
  export default LoginForm;
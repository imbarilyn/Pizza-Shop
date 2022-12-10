import React, { useState } from 'react'
import Error from '../pages/Error'



function SignupForm({ onLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] =useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        setErrors([])
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password, password_confirmation: passwordConfirmation}) 
            
        }).then(resp=>{
            setIsLoading(false);
            if(resp.ok){
                resp.json().then(user=> onLogin(user));
            }
            else{
                resp.json().then(e => console.log(e.value))
            }
        });
    }



  return (
    <div className='wrapper' >
    <form className="container" onSubmit={handleSubmit}>
      <p className="heading">Sign up</p>
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
      <div className="box">
        <p>Confirm Password</p>
        <div>
          <input 
            type="password"
            id="passwor_confirmation"
            autocomplete="off"
            value={passwordConfirmation}
            placeholder="Confirm your password"
            onChange = {(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className = "loginBtn">{isLoading? "isLoading...": "Signup"}</button>
      
      
    </form>       
  </div> 
  )
}

export default SignupForm
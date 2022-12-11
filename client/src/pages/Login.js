import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm';
//import '../styles/Login.css'

function Login({ onLogin }) {


    const [showLoggin, setShowLogin] = useState(true)
  return (
    
      <div style={{backgroundImage: `url(https://media.istockphoto.com/id/1083487948/photo/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-concrete-background-top.jpg?b=1&s=170667a&w=0&k=20&c=-K9lSwa5jOsGpRj4cXJM-9Of8Jzv7Dwkun47i77Toxk=)`, backgroundSize: "cover", height: "100vh"}}>
      {showLoggin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <p style ={{color: "#fff"}}>
            Don't have an account? &nbsp;
            <button color="secondary" style ={{height:"40px", borderRadius: "8px", marginTop: "10px", padding: "4px 6px"}} onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignupForm onLogin={onLogin} />
          <p style={{color: "#fff"}}>
            Already have an account? &nbsp;
            <button color="secondary" style ={{height:"40px", borderRadius: "8px", marginTop: "10px", padding: "4px 6px"}} onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}; 

export default Login;
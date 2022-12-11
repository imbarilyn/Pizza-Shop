import React, { useEffect, useState} from 'react'
import { Routes, Route } from "react-router-dom";
import './styles/App.css'
import Announcement from './components/Announcement'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import LoginForm from './components/LoginForm'
import Login from './pages/Login'
import Menu from './pages/Menu'
import SignupForm from './components/SignupForm'
import ReviewForm from './components/ReviewForm';

function App() {
  const [user,setUser] = useState(null)

  useEffect(()=>{
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(user => setUser(user))
      }
    });
  }, []);

  if (!user){
    <LoginForm onLogin = {setUser} />
  }

  return (
    <div>
      <Announcement />
      <NavBar />
      
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path = '/login' element = {<Login />} />
        <Route path='/menu' element ={<Menu />} />
        <Route path='/sign_up' element={<SignupForm />}/>
        <Route path='/review_form' element = {<ReviewForm />}/>
      </Routes>
    </div>
  )
}

export default App


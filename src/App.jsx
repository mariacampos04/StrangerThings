import React from 'react';
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
//import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Posts from './components/Posts';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {

  return (  
    <>
      <div id="container">
        <h1></h1>
      <div id="navbar">
        <Link to = "/login">login</Link>
        <Link to = "/posts">post</Link>
        <Link to = "/profile">profile</Link>
        <Link to = "/register">register</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/posts" element = {<Posts/>}/>
          <Route path = "/profile" element = {<Profile/>}/>
          <Route path = "/register" element = {<Register/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App


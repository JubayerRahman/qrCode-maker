import React, { useEffect, useState } from 'react';
import './App.css';
import {Routes, Route , Link , useLocation} from "react-router-dom"
// pages
import Home from './Components/Home/Home';
import Scanner from './Components/Scanner/Scanner';
import Dev from "./Components/Dev/Dev"


function App() {
  const [homeLclass , sethomeLclass] = useState("link")
  const [scannerLClass , setscannerLClass] = useState("link")
  const [devLclass , setdevLclass] = useState("link")
  const location = useLocation();
  const currentpage = location.pathname;
  console.log(currentpage)
  const HomeActive =()=>{
    sethomeLclass('active')
    setscannerLClass('link')
    setdevLclass('link')
  }
  useEffect(()=>{
    if(currentpage ==="/"){
      sethomeLclass('active')
      setscannerLClass('link')
      setdevLclass('link')
    }
    if(currentpage ==="/Scanner"){
      sethomeLclass('link')
      setscannerLClass('active')
      setdevLclass('link')
    }
    if(currentpage ==="/Dev"){
      sethomeLclass('link')
      setscannerLClass('link')
      setdevLclass('active')
    }
  },[])
  const scannerActive =()=>{
    sethomeLclass('link')
    setscannerLClass('active')
    setdevLclass('link')
  }
  const devActive =()=>{
    sethomeLclass('link')
    setscannerLClass('link')
    setdevLclass('active')
  }
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/Scanner' element={<Scanner/>}/>
         <Route path='/Dev' element={<Dev/>}/>
       </Routes>
       <div className='Links'>
         <Link className={scannerLClass} to="/Scanner" onClick={scannerActive} ><i className="fa-solid fa-qrcode"></i> Scan</Link>
         <Link className={homeLclass} to="/" onClick ={HomeActive}><i className="fa-solid fa-house"></i> Home</Link>
         <Link className={devLclass} to="/Dev" onClick={devActive}><i className="fa-solid fa-code"></i> About</Link>
       </div>
      </header>
    </div>
  );
}

export default App;

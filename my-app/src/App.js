import React, {  useState } from "react"
import Login from "./Blog_App/Login/Login";
import "./App.css"
import Register from "./Blog_App/Login/Register";
import Home from "./Blog_App/LandingPage.js/Home";
import ShowCars from "./Blog_App/LandingPage.js/ShowCars";
import MoreDetails from "./Blog_App/LandingPage.js/MoreDetails";

import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./ProctedRoute";



const App = () => {
  const [states,setStates] = useState("")
  const [greeting,setGreeting] = useState("")
  const [cars,getCars] = useState()
 
 return <div>
    <Routes>
      <Route element={<PrivateRoute/>}>
        <Route path="/home" element={ <Home  setStates={setStates}/> }/>
       
        <Route path="/showcars" element={ <ShowCars states={states} cars={cars} getCars={getCars}/> }/>
        <Route path="/moredetails" element={<MoreDetails greeting={greeting} setGreeting={setGreeting}/>}/>
      </Route>
      
      <Route path="/" element={ <Login/> }/>
      <Route path="/register" element={ <Register greeting={greeting} setGreeting={setGreeting}/> }/>
      
    </Routes>
 
  </div>
};

export default App;



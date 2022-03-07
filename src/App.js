import React from "react";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Login from "./Components/Pages/LoginPage/Login";
import Navbar from "./Components/Pages/HomePage/Navbar";
import Home from "./Components/Pages/HomePage/Home";
import './App.css';

function App(Component) {
 
  return (
    
    <div>
     <Router basename="/">
  
    
    <Switch>
    
    <Route path="/" exact component={Login}/>
    <Route path="/Home" component={Home}/>
 
      
    </Switch>
    </Router>
     </div>

  );
}

export default App;
import React from "react";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Login from "./Components/Pages/LoginPage/Login";
import Navbar from "./Components/Pages/HomePage/Navbar";
import Home from "./Components/Pages/HomePage/Home";
import AddWantedPerson from "./Components/Pages/AddEntity/AddWantedPerson";
import ListEmployeeComponent from "./Components/Pages/Tutorial/ListEmployeeComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import ListWantedPeople from "./Components/Pages/ListWantedPeople";
import './App.css';


function App(Component) {
 
  return (
    
    <div>
     <Router basename="/">
  
    
    <Switch>
    
    <Route path="/" exact component={Login}/>
    <Route path="/Home" component={Home}/>
    <Route path="/AddWantedPerson" component={AddWantedPerson}/>
    
   
 
    <div className="container">
    <Switch>
    <Route path="/Tutorial" component={ListEmployeeComponent}/>
    <Route path="/Employees" component={ListEmployeeComponent}/>
    <Route path="/WantedPeopleList" component={ListWantedPeople}/>
    </Switch>
    </div>
  
    

 
      
    </Switch>
    </Router>
     </div>

  );
}

export default App;
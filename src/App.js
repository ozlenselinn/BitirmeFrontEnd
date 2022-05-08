import React from "react";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Login from "./Components/Pages/LoginPage/Login";
import Navbar from "./Components/Pages/HomePage/Navbar";
import Home from "./Components/Pages/HomePage/Home";


import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import ListWantedPeople from "./Components/Pages/ListWantedPeople";
import './App.css';
import CreateWantedPeopleComponent from "./Components/CreateWantedPeopleComponent";
import UpdateWantedPeopleComponent from "./Components/Pages/UpdateWantedPeopleComponent";
import ViewWantedPeopleComponent from "./Components/ViewWantedPeopleComponent";
import Navbarmenu from "./Components/Pages/LoginPage/NavbarMenu";
import SignIn from "./Components/Pages/LoginPage/SignIn";




function App(Component) {
 
  return (
    
    <div>
  
     <Router basename="/">
  
    
    <Switch>
    
    <Route path="/" exact component={Login}/>
    <div className="container1">
      <div className ='containerback'>
       <Navbarmenu></Navbarmenu>
      <FooterComponent></FooterComponent>
    
    <Route path="/Home" component={Home}/>

    </div>
    
     <div className="container2" >
    
    <Route path="/WantedPeopleList" component={ListWantedPeople}/>
    <Route path="/AddWantedPeople/:id" component={CreateWantedPeopleComponent}/>
    <Route path="/ViewWantedPeople/:id" component={ViewWantedPeopleComponent}/>
    <Route path="/deneme" component={SignIn}/>
   
    </div>
    </div>
   </Switch>
    </Router>
     </div>

  );
}

export default App;
 
    
    
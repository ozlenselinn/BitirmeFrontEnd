import Loginson from "./Components/Pages/LoginPage/Loginson";
import Home from "./Components/Pages/HomePage/Home";


import {BrowserRouter as Router,Switch, Route} from "react-router-dom";




function App(Component) {
 
  return (
    
    <div>
    
   
    <Router basename="/">
     
    
    <Switch>
    
    <Route path="/" exact component={Loginson}/>
    <Route path="/Home" component={Home}/>
      
    
     
           



    </Switch>
    </Router>
     </div>

  );
}



export default App;
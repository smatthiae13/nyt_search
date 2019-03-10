import React, { Component } from 'react';
import NavBar from "./component/navBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from './pages/Books';
import Saved from './pages/Saved';


import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <NavBar />
         <Switch>
           <Route exact path="/" component={Books} />
           <Route exact path="/saved" component={Saved} />
         </Switch>
       </div>
     </Router>
    );
  }
}

export default App;

import logo from './logo.svg';
import {useState} from "react";
import {HashRouter as Router, Route, Routes,Link} from "react-router-dom";
import './App.css';
//Home index app, the routes to each of the websites "tabs" will be here
//We are going to need to import each one of the tabs to use in the router
//testing something
import NavBar from "./components/NavBar.tsx";
import Homepage from "./pages/Homepage.tsx";
import NavBar from "./components/NavBar.tsx";
import Tab1 from "./pages/Tab1.tsx";
import Tab2 from "./pages/Tab2.tsx";
import Tab3 from "./pages/Tab3.jsx";
import Tab4 from "./pages/Tab4.tsx";
import Tab5 from "./pages/Tab5.tsx";
import Tab6 from "./pages/Tab6.tsx";

//I fucking hate hash routing i fucking hate hash routing
//Need to let people go between tabs -> idkno put a header or something(?) also does the home page even count

//<NavBar>
function App() {
  return (
    <Router>
    <NavBar></NavBar>
    <Routes>
    <Route exact path = "/"  element = {<Homepage></Homepage>}></Route>
    <Route path = "/tab1"  element = {<Tab1></Tab1>}></Route>
    <Route path = "/tab2" element = {<Tab2></Tab2>}></Route>
    <Route path = "/tab3" element = {<Tab3></Tab3>}></Route>
    <Route path = "/tab4" element = {<Tab4></Tab4>}></Route>
    <Route path = "/tab5" element = {<Tab5></Tab5>}></Route>
    <Route path = "/tab6" element = {<Tab6></Tab6>}></Route>
    </Routes> 
    </Router>
    
  );
}

export default App;

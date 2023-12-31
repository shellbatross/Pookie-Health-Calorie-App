import logo from './logo.svg';
import {useState} from "react";
import {HashRouter as Router, Route, Routes,Link} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
//Home index app, the routes to each of the websites "tabs" will be here
//We are going to need to import each one of the tabs to use in the router
//testing something
import Time from "./ass-ets/Time";
import TimeContextLayout from './context/TimeContextLayout';
import NavBar from "./components/NavBar.tsx";
import Homepage from "./pages/Homepage.tsx";
import Tab1 from "./pages/Tab1.tsx";
import Tab2 from "./pages/Tab2.tsx";
import Tab3 from "./pages/Tab3.jsx";
import Tab4 from "./pages/Tab4.tsx";
import Tab5 from "./pages/Tab5.tsx";
import Tab6 from "./pages/Tab6.tsx";
import StaticHomePage from './pages/StaticHomePage';
import UserInfoPage from './pages/UserInfoPage';
import GoalsPage from './pages/GoalsPage';
import SetWorkoutPage from './pages/SetWorkoutPage';
import RunPage from './pages/RunPage';
import BikePage from './pages/BikePage';
import LiftPage from './pages/LiftPage';
import TermsPage from './pages/TermsPage';
import ConfettiContextLayout from './context/ConfettiContextLayout.js';
import UserContextLayout from './context/UserContextLayout';
import FormContextLayout from './context/FormContextLayout';
//I fucking hate hash routing i fucking hate hash routing
//Need to let people go between tabs -> idkno put a header or something(?) also does the home page even count

//<NavBar>
function App() {
  function clearStorage() {

    let session = sessionStorage.getItem('register');

    if (session == null) {
    
        localStorage.removeItem('user');
        localStorage.removeItem('time');

    }
    sessionStorage.setItem('register', 1);
}
window.addEventListener('load', clearStorage);
  return (
    <Router>
    <Routes>
    <Route path = "/tab1"  element = {<Tab1></Tab1>}></Route>
    <Route path = "/tab2" element = {<Tab2></Tab2>}></Route>
    <Route path = "/tab3" element = {<Tab3></Tab3>}></Route>
    <Route path = "/tab4" element = {<Tab4></Tab4>}></Route>
    <Route path = "/tab5" element = {<Tab5></Tab5>}></Route>
    <Route path = "/tab6" element = {<Tab6></Tab6>}></Route>
    <Route element = {<UserContextLayout></UserContextLayout>}>
    <Route element = {<TimeContextLayout></TimeContextLayout>}>
    <Route element = {<FormContextLayout></FormContextLayout>}>
    <Route element = {<ConfettiContextLayout></ConfettiContextLayout>}>
    <Route exact path = "/"  element = {<StaticHomePage></StaticHomePage>}></Route>
    <Route path = "/helper" element = {<Time></Time>}></Route>
    <Route path = "/setworkout" element = {<SetWorkoutPage/>}></Route>
    <Route path = "/goals" element = {<GoalsPage/>}></Route>
    <Route path = "/userinfo" element = {<UserInfoPage/>}></Route>
    <Route path = "/home" element = {<StaticHomePage/>}></Route>
    <Route path = "/run" element = {<RunPage/>}></Route>
    <Route path = "/bike" element = {<BikePage/>}></Route>
    <Route path = "/lift" element = {<LiftPage/>}></Route>
    <Route path = "/termsandconditions" element = {<TermsPage/>}></Route>
    </Route>
    </Route>
    </Route>
    </Route>
    </Routes> 
    </Router>
    
  );
}

export default App;

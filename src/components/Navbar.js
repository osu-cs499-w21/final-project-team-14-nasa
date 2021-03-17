import React from 'react';
import { 
    BrowserRouter,
    Route,
    Switch,
    NavLink } from 'react-router-dom';


import Home from '../pages/Home';
import Missions from '../pages/Missions'
import Weather from '../pages/Weather';
import Rover from '../pages/Rover';
import Search from '../pages/Search';



function Navbar() {
    return (
      <>
        <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/missions">Missions</NavLink></li>
            <li><NavLink to="/weather">Weather</NavLink></li>
            <li><NavLink to="/rover">Rover</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>
        </ul>
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/missions">
                    <Missions />
                </Route>
                <Route exact path="/weather">
                    <Weather />
                </Route>
                <Route path="/rover:roverName">
                    <Rover />
                </Route>
                <Route exact path="/search/:rover/:date">
                    <Search />
                </Route>
                <Route exact path="/search">
                    <Search />
                </Route>
            </Switch>
      </>
    );
  }
  
  export default Navbar;
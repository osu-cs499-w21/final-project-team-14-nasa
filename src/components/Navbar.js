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
        <ul class="nav nav-tabs justify-content-end">
        <li class="nav-item">
            <li class="nav-link"><NavLink to="/">Home </NavLink></li>
        </li>
        <li class="nav-item">
            <li class="nav-link"><NavLink to="/missions">Missions </NavLink></li>
        </li>
        <li class="nav-item">
            <li class="nav-link"><NavLink to="/weather">Weather </NavLink></li>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Rovers</a>
            <div class="dropdown-menu">
                <li class="dropdown-item"><NavLink to ="/rover/curiosity">Curiosity</NavLink></li>
                <li class="dropdown-item"><NavLink to ="/rover/opportunity">Opportunity</NavLink></li>
                <li class="dropdown-item"><NavLink to ="/rover/spirit">Spirit</NavLink></li>
            </div>
        </li>
        <li class="nav-item">
            <li class="nav-link"><NavLink to="/search">Search </NavLink></li>
        </li>
        </ul>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/missions">
                    <Missions />
                </Route>
                <Route exact path="/weather">
                    <Weather />
                </Route>
                <Route path="/rover/:roverName">
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
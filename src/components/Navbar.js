import React from 'react';
import {
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
        <ul className="nav nav-tabs justify-content-end">
        <li className="nav-item">
            <li className="nav-link"><NavLink to="/">Home </NavLink></li>
        </li>
        <li className="nav-item">
            <li className="nav-link"><NavLink to="/missions">Missions </NavLink></li>
        </li>
        <li className="nav-item">
            <li className="nav-link"><NavLink to="/weather">Weather </NavLink></li>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Rovers</a>
            <div className="dropdown-menu">
                <li className="dropdown-item"><NavLink to ="/rover/curiosity">Curiosity</NavLink></li>
                <li className="dropdown-item"><NavLink to ="/rover/opportunity">Opportunity</NavLink></li>
                <li className="dropdown-item"><NavLink to ="/rover/spirit">Spirit</NavLink></li>
            </div>
        </li>
        <li className="nav-item">
            <li className="nav-link"><NavLink to="/search">Search </NavLink></li>
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
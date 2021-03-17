import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Missions from './pages/Missions'
import Rover from './pages/Rover';
import Weather from './pages/Weather';
import Search from './pages/Search';

function App() {

    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Missions from './pages/Missions'
import Weather from './pages/Weather';

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
                <Route path="/rover">

                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Missions from './pages/Missions'

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
            </Switch>
        </BrowserRouter>
    );
}

export default App;

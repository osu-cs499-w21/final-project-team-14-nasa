import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Weather from './Weather';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/weather">
                    <Weather />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

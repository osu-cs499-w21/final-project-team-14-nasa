import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

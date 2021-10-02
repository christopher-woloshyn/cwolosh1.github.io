import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Interests from './components/Interests';
import Projects from './components/Projects';
import UnderContruction from './components/UnderContruction';
import NotFound from './components/NotFound';


function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/interests">
                    {/* <Interests /> */}
                    <UnderContruction page="interests"/>
                </Route>
                <Route exact path="/projects">
                    <Projects />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

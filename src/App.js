import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoPage from './pages/TodoPage';
import NoMatch from './pages/NoMatch';
import Nav from "./components/Nav/Nav";

function App() {
    return (
        <Router>
            <Nav />
            <div>
                <Switch>
                    <Route exact path="/" component={TodoPage} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
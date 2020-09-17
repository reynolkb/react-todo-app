import React from 'react';
import TodoPage from './pages/TodoPage';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from './pages/NoMatch';
// import Nav from "./components/Nav/Nav";

function App() {
    return (
        <TodoPage />
    )
    // <Router>
    //     <Nav />
    //     <div>
    //         <Switch>
    //             <Route path="/" component={TodoPage} />
    //             <Route component={NoMatch} />
    //         </Switch>
    //     </div>
    // </Router>
}

export default App;
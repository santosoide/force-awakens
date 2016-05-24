import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './pages/App';
import NotFound from './pages/NotFound';
import HomePage from './pages/Stars';
import StarPage from './pages/Star'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="/stars" component={HomePage}/>
            <Route path="stars/:id" component={StarPage}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </Router>
);
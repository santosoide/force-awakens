import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './pages/App';
import NotFound from './pages/NotFound';
import SignInPage from './pages/SignIn';
import HomePage from './pages/Stars';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="/stars" component={HomePage}/>
            <Route path="stars/:id" component={HomePage}/>
        </Route>
        <Route path="/signin" component={SignInPage}/>
        <Route path="*" component={NotFound}/>
    </Router>
);

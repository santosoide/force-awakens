import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './pages/App';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import SignUpPage from './pages/SignUp';
import SignInPage from './pages/SignIn';
import PeoplePage from './pages/PeopleIndex';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="people" component={PeoplePage}/>
            <Route path="people/:id" component={HomePage}/>
            <Route path="planets" component={HomePage}/>
            <Route path="planets/:id" component={HomePage}/>
            <Route path="starships" component={HomePage}/>
            <Route path="starships:id" component={HomePage}/>
        </Route>
        <Route path="/signup" component={SignUpPage}/>
        <Route path="/signin" component={SignInPage}/>
        <Route path="*" component={NotFound}/>
    </Router>
);
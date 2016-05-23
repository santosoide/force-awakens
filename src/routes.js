import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './pages/App';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import SignUpPage from './pages/SignUp';
import SignInPage from './pages/SignIn';
import PeoplePage from './pages/PeopleIndex';
import PeopleShow from './pages/PeopleShow';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="people" component={PeoplePage}/>
            <Route path="people/:id" component={PeopleShow}/>
        </Route>
        <Route path="/signin" component={SignInPage}/>
        <Route path="*" component={NotFound}/>
    </Router>
);

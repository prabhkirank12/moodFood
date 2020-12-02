import React from 'react';
import { AuthRoute, SemiProtectedRoute, ProtectedRoute } from '../util/route_util';
import { withRouter, Switch, Route } from 'react-router-dom';

import Greeting from './greeting/greeting';
import Dashboard from './dashboard/dashboard';
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import QuizFormContainer from './quiz/quiz_form_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <Route exact path="/" component={Greeting} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <SemiProtectedRoute exact path="/quiz" component={QuizFormContainer} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
    </div>
);

export default withRouter(App);
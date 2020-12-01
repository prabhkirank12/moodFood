import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import Greeting from './greeting/greeting';
import Dashboard from './dashboard/dashboard';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Greeting} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
    </div>
);

export default App;
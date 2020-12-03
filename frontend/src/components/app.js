import React from 'react';
import { AuthRoute, SemiProtectedRoute, ProtectedRoute } from '../util/route_util';
import { withRouter, Switch } from 'react-router-dom';

import PreAuth from './pre_auth/pre_auth';
import Dashboard from './dashboard/dashboard_container';
import NavBarContainer from './navbar/navbar_container';
import QuizFormContainer from './quiz/quiz_form_container';
import MapBuffer from "./map/map_buffer";

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path={["/","/login","/signup"]} component={PreAuth} />
            <SemiProtectedRoute exact path="/quiz" component={QuizFormContainer} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute exact path="/map" component={MapBuffer} />
        </Switch>
    </div>
);

export default withRouter(App);
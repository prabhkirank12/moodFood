import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import { withRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './dashboard/dashboard_container';
import NavBarContainer from './navbar/navbar_container';
import QuizFormContainer from './quiz/quiz_form_container';
import MapBuffer from "./map/map_buffer";

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <Route exact path="/quiz" component={QuizFormContainer} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/map/:mood" component={MapBuffer} />
        </Switch>
    </div>
);

export default withRouter(App);
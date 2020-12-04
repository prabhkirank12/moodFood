import React from 'react';
import { AuthRoute, SemiProtectedRoute } from '../util/route_util';
import { withRouter, Switch } from 'react-router-dom';

import PreAuth from './pre_auth/pre_auth';
import PostAuth from './post_auth/post_auth';

import "./styling/base.scss";

const App = props => (
    <div>
        <Switch>
            <AuthRoute exact path={["/","/login","/signup"]} component={PreAuth} />
            <SemiProtectedRoute path={["/quiz","/dashboard","/map/:mood"]} component={PostAuth} />
        </Switch>
    </div>
)

export default withRouter(App);

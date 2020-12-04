import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Greeting from './greeting/greeting';
import LoginFormContainer from './login/login_form_container';
import SignupFormContainer from './signup/signup_form_container';
import Logo from './logo/logo';
import './pre-auth.scss';

class PreAuth extends React.Component {

    componentDidMount() {
        const body = document.getElementsByTagName('body')[0]
        body.classList.remove(...body.classList)
    }

    render() {
        return (
            <div>
                <Logo />
                <Switch>
                    <Route exact path="/" component={Greeting} />
                    <Route exact path="/login" component={LoginFormContainer} />
                    <Route exact path="/signup" component={SignupFormContainer} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(PreAuth);
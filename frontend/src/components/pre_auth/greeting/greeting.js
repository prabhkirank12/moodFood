import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/session_actions';
import { Link } from 'react-router-dom';

const mDTP = (dispatch) => {
    return {
        login: user => dispatch(login(user))
    };
};

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleDemoLogin(e) {
        e.preventDefault();
        let user = {
            email: "demo@demo.com",
            password: "password",
        };

        this.props.login(user);
    };

    render() {
        return (
            <div className="buttons-container">
                <div className="buttons-login">
                    <Link to={'/login'}>Login</Link>
                </div>
                <div className="buttons-login">
                    <Link to={'/signup'}>Sign Up</Link>
                </div>
                <div className="buttons-login">
                    <Link to="/" onClick={this.handleDemoLogin}>Demo</Link>
                </div>
            </div>
        );
    }
}

export default connect(null, mDTP)(Greeting);
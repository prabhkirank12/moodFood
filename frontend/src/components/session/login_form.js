import React from 'react';
import { withRouter } from 'react-router-dom';
import './login.scss';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    };

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.props.errors).map((error,i) => (
                    <li key={`error-${i}`}>
                        {this.props.errors[error]}
                    </li>
                ))}
            </ul>
        );
    };

    render() {
        return (
            <div className="login-container">
                <div>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div>
                        <input type="text" 
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br/>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />              
                        <br/>
                        <input type="submit" value="Submit" />
                        {this.renderErrors()}         
                    </div>
                </form>
                </div>
            </div>
        );
    };
};

export default withRouter(LoginForm);
import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            firstName: '',
            lastName: '',
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
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
            password: this.state.password,
            password2: this.state.password2,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };

        this.props.signup(user, this.props.history);
    };

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.props.errors[error]}
                    </li>
                ))}
            </ul>
        );
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                            value={this.state.firstName}
                            onChange={this.update('firstName')}
                            placeholder="First Name"
                        />
                        <br />
                        <input type="text"
                            value={this.state.lastName}
                            onChange={this.update('lastName')}
                            placeholder="Last Name"
                        />
                        <br />
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <br />
                        <input type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    };
};

export default withRouter(SignupForm);
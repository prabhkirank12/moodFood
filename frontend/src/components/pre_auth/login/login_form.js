import React from 'react';
import { withRouter, Link } from 'react-router-dom';

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

    componentDidMount(){
        this.props.clearSessionErrors();
    }

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
            <div className="session-container">
                <div className="form-container">
                    <form onSubmit={this.handleSubmit} className="session-form-box">
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
                            <input type="submit" value="SUBMIT" />
                            {this.renderErrors()}         
                        </div>
                    </form>
                    <div className="session-link">
                        <span>New to moodfood? </span>
                        <Link to="/signup">Create an account.</Link>
                    </div>
                </div>
            </div>
        );
    };
};

export default withRouter(LoginForm);
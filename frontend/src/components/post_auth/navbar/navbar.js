import React from 'react';
import Logo from "./logo/logo.js";
import './navbar.scss'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    };

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    };

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        }
        
    };

    render() {
        return (
            <div>
                <Logo />
                {this.getLinks()}
            </div>
        );
    };
};

export default NavBar;
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
                <div className="logout-bttn">
                    <button className="logout" onClick={this.logoutUser}>Logout</button>
                </div>
            );
        }
        
    };

    render() {
        return (
            <div>
                <Logo className="navbar-logo" />
                {this.getLinks()}
            </div>
        );
    };
};

export default NavBar;
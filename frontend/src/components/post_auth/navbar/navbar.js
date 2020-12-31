import React from 'react';
import Logo from "./logo/logo.js";
import { Link } from 'react-router-dom';
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
        const path = this.props.location.pathname;
        if (this.props.loggedIn && path.slice(-4) !== 'quiz') {
            return (
                <div className="logout-bttn">
                    <button className="logout" onClick={this.logoutUser}>Logout</button>
                    <Link to="/quiz" className="logout">Retake Quiz</Link>
                </div>
            );
        }  else if (this.props.loggedIn) {
            return (
                <div className="logout-bttn">
                    <button className="logout" onClick={this.logoutUser}>Logout</button>
                </div>
            )
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
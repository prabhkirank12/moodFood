import React from "react";
import "./logo.scss";
import { Link } from 'react-router-dom';

const Logo = () => (
    <div className="pre-auth-logo-container">
        <div>
            <Link to="/">moodfood</Link>
            <div className="pre-auth-circle down"></div>
            <div className="pre-auth-circle up"></div>
        </div>
    </div>
)

export default Logo;
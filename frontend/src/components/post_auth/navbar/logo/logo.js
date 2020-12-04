import React from "react";
import { Link } from 'react-router-dom';
import "./logo.scss";

export default props => (
    <Link to="/dashboard" className="logo-container">
        <span>moodfood</span>
        <div className="circle down"></div>
        <div className="circle up"></div>
    </Link>
)


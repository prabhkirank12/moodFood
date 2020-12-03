import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    render() {
        return (
            <div>
                <div className="buttons-login">
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>
        );
    }
}

export default Greeting;
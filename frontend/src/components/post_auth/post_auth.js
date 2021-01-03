import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import { withRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './dashboard/dashboard_container';
import NavBarContainer from './navbar/navbar_container';
import QuizFormContainer from './quiz/quiz_form_container';
import MapBuffer from "./map/map_buffer";

class PostAuth extends React.Component {

    componentDidMount() {
        const body = document.getElementsByTagName('body')[0]
        body.classList.remove(...body.classList)
        if (this.props.match.params.mood) {
            body.classList.add(this.props.match.params.mood, 'background-color-light')
        }
    }

    componentDidUpdate(prevProps) {
        let body;
        if (this.props.match.params.mood && prevProps.match.params.mood !== this.props.match.params.mood) {
            body = document.getElementsByTagName('body')[0];
            body.classList.remove(prevProps.match.params.mood);
         
            body.classList.add(this.props.match.params.mood, 'background-color-light')
        } else if (prevProps.match.params.mood !== this.props.match.params.mood) {
            body = document.getElementsByTagName('body')[0];
            body.classList.remove(...body.classList);
        }
    }
    
    render() {
        return (
            <div>
                <NavBarContainer />
                <Switch>
                    <Route exact path="/quiz" component={QuizFormContainer} />
                    <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                    <ProtectedRoute path="/map/:mood/:radius" component={MapBuffer} />
                </Switch>
            </div>
        )
    }
}
export default withRouter(PostAuth)
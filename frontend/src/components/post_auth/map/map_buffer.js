import Map from "./map";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import React from "react";
import dumpling from '../../../images/dumplingnoshadow.png'
import { fetchRestaurant } from '../../../actions/places_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        restaurant: state.session.user.place
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchRestaurant: (mood, radius) => dispatch(fetchRestaurant(mood, radius))
})


class MapBuffer extends React.Component {

    componentDidMount() {
        let mood = this.props.match.params.mood;
        let radius = this.props.match.params.radius;
        this.props.fetchRestaurant(mood, radius);
    }

    render() {
        return (this.props.restaurant) ? (
            <Map />
        ) : (
            <div className="buffer">
                <div className="loader">
                    <img src={dumpling} alt="dumpling loader" />
                </div>
                <br/>
                    <div className="restaurant-details">
                    <h5>If your results are delayed, make sure you've turned on your location in your browser.</h5>
                </div>
            </div> 
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MapBuffer));
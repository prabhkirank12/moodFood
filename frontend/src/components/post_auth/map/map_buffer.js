import Map from "./map";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import React from "react";
import dumpling from '../../../images/dumplingnoshadow.png';
import { fetchRestaurant } from '../../../actions/places_actions';

const mapStateToProps = state => ({
    restaurant: state.session.user.place,
});

const mapDispatchToProps = (dispatch) => ({
    fetchRestaurant: mood => dispatch(fetchRestaurant(mood))
})


class MapBuffer extends React.Component {

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.mood)
        
    }

    render() {
        return (this.props.restaurant) ? (
            <Map />
        ) : (
            <div className="buffer">
                <div className="loader">
                    <img src={dumpling} alt="dumpling loader" />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MapBuffer));
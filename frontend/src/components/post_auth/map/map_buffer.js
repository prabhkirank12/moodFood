import Map from "./map";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import React from "react";
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
        document.getElementsByTagName('body')[0].classList.add(this.props.match.params.mood, 'background-color-light')
    }

    render() {
        return this.props.restaurant ? <Map /> : <div className="buffer"></div>
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MapBuffer));
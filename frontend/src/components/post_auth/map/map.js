import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {fetchMapKey} from "../../../util/map_api_util";
import {removePlace} from '../../../actions/places_actions';
import "./map.scss";

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        restaurant: state.session.user.place,
        currentMood: ownProps.match.params.mood
    }
}

const mapDispatchToProps = (dispatch) => ({
    removePlace: () => dispatch(removePlace())
})

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            key : ""
        }
    }

    componentDidMount() {
        window.initMap = () => {
                
                const map = new window.google.maps.Map(document.getElementById("map-container"), {
                center: this.props.restaurant.location,
            })
            map.fitBounds({
                east: this.props.restaurant.geometry.viewport.northeast.lng,
                north: this.props.restaurant.geometry.viewport.northeast.lat,
                west: this.props.restaurant.geometry.viewport.southwest.lng,
                south: this.props.restaurant.geometry.viewport.southwest.lat,
            })
            new window.google.maps.Marker({
                position: this.props.restaurant.geometry.location,
                map,
            })
        }
        fetchMapKey()
        .then((mapKey) => {
            this.setState({key : mapKey.data})
            let script = document.getElementById("google-map-script");
            if (script) {
                window.initMap();
            } else {
                script = document.createElement('script');
                script.setAttribute("id", "google-map-script");
                script.src = `https://maps.googleapis.com/maps/api/js?key=${mapKey.data}&callback=initMap`;
                document.head.appendChild(script);
            }
        })
    }

    componentWillUnmount() {
        this.props.removePlace();
    }

    // get photos() {
    //     if (this.props.restaurant.photos && this.state.key) {
    //         return (<img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=${this.props.restaurant.photos[0].photo_reference}&key=${this.state.key}`} alt="restaurant" />);   
    //     }
    //     return (
    //         <></>
    //     )
    // }

    render() {
        const { restaurant, currentMood } = this.props;
        
        return (
            <div className={currentMood + ' background-color-light map-page'}>
                <h2>The food for your mood is...</h2>
                    <div className="restaurant-details">
                        <div>
                            <h3>
                                {restaurant.type} at {restaurant.name}
                            </h3>
                        </div>
                        <div>
                            <h4>
                                {restaurant.vicinity}
                            </h4>
                        </div>
                    </div>
                    
                    <div id="map-container" ref="map">
                    </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Map));
import React from "react";
import {connect} from "react-redux";
import {fetchMapKey} from "../../util/map_api_util";
import "./map.scss";

// const mapStateToProps = () => {
//     return ({
//         restaurant: {
//             place_id: "ChIJiTxP17pYwokR0Gj0Wrd5cOg",
//             icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
//             photos: [{
//                 height: 849,
//                 html_attributions: ["<a href=\"https://maps.google.com/maps/contrib/104833404427227649838\">A Google User</a>"],
//                 photo_reference: "ATtYBwIRBDP1kaiq2_5yVkvhfCDW8-6zrYTeaY9eWsIfRPJQHLFu5Oe-RTj_XGu218ON4FNZloL6AjFNAqBmTPn06Gn06yTZCq_mCrBB12QgwTxh5lgmS5nqvDeLZL4CHYB7ItO840ltlDhACTmOJFaPj6nzbuLySOeeIuyHY5XzZU11Fn14",
//                 width: 1600,
//             }],
//             price_level: 2,
//             rating: 4.5,
//             location: {
//                 lat: 40.7794927,
//                 lng: -73.9501884,
//             },
//             viewport: {
//                 northeast: {
//                     lat: 40.78090372989273,
//                     lng: -73.94898387010727,
//                 },
//                 southwest: {
//                     lat: 40.77820407010729,
//                     lng: -73.95168352989272,
//                 }
//             }
//         }
//     })
// }

const mapStateToProps = state => {
    return {
        restaurant: state.session.user.place,
    }
}

// const mapDispatchToProps = () => {
//     return {
//         fetchMapKey: () => dispatchEvent(fetchMapKey())
//     }
// }

class Map extends React.Component {

    // initMap() {
    //     const map = new window.google.maps.Map(document.getElementById("map-container"), {
    //         center: this.props.restaurant.location,
    //     })
    //     map.fitBounds({
    //         east: this.props.restaurant.geometry.viewport.northeast.lng,
    //         north: this.props.restaurant.geometry.viewport.northeast.lat,
    //         west: this.props.restaurant.geometry.viewport.southwest.lng,
    //         south: this.props.restaurant.geometry.viewport.southwest.lat,
    //     })
    //     const marker = new window.google.maps.Marker({
    //         position: this.props.restaurant.geometry.location,
    //         map,
    //     })
    // }

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
            const marker = new window.google.maps.Marker({
                position: this.props.restaurant.geometry.location,
                map,
            })
        }
        fetchMapKey()
        .then((mapKey) => {
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

    render() {
        const { restaurant } = this.props;
        return (
            <div>
                <div id="map-container" ref="map">
                </div>
                    <div>
                        {restaurant.name}
                    </div>
                    <div>
                        {restaurant.vicinity}
                    </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(Map);
import React from "react";
import {connect} from "react-redux";
import {fetchMapKey} from "../../util/map_api_util";
import "./map.scss";

const mapStateToProps = () => {
    return ({
        restaurant: {
            place_id: "ChIJiTxP17pYwokR0Gj0Wrd5cOg",
            icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            photos: [{
                height: 849,
                html_attributions: ["<a href=\"https://maps.google.com/maps/contrib/104833404427227649838\">A Google User</a>"],
                photo_reference: "ATtYBwIRBDP1kaiq2_5yVkvhfCDW8-6zrYTeaY9eWsIfRPJQHLFu5Oe-RTj_XGu218ON4FNZloL6AjFNAqBmTPn06Gn06yTZCq_mCrBB12QgwTxh5lgmS5nqvDeLZL4CHYB7ItO840ltlDhACTmOJFaPj6nzbuLySOeeIuyHY5XzZU11Fn14",
                width: 1600,
            }],
            price_level: 2,
            rating: 4.5,
            location: {
                lat: 40.7794927,
                lng: -73.9501884,
            },
            viewport: {
                northeast: {
                    lat: 40.78090372989273,
                    lng: -73.94898387010727,
                },
                southwest: {
                    lat: 40.77820407010729,
                    lng: -73.95168352989272,
                }
            }
        }
    })
}

// const mapDispatchToProps = () => {
//     return {
//         fetchMapKey: () => dispatchEvent(fetchMapKey())
//     }
// }

class Map extends React.Component {

    initMap() {
        const map = new window.google.maps.Map(document.getElementById("map-container"), {
            center: this.props.restaurant.location,
        })
        map.fitBounds({
            east: this.props.restaurant.viewport.northeast.lng,
            north: this.props.restaurant.viewport.northeast.lat,
            west: this.props.restaurant.viewport.southwest.lng,
            south: this.props.restaurant.viewport.southwest.lat,
        })
        const marker = new window.google.maps.Marker({
            position: this.props.restaurant.location,
            map,
        })
    }

    componentDidMount() {
        fetchMapKey()
            .then((mapKey) => {
                    const script = document.createElement('script');
                    script.src = `https://maps.googleapis.com/maps/api/js?key=${mapKey}`;
                    document.head.appendChild(script);
                    eval($(script).text());
                }
            )
        this.initMap();
    }

    render() {
        return (
            <div id="map-container" ref="map">

            </div>
        )
    }
}

export default connect(mapStateToProps, null)(Map);
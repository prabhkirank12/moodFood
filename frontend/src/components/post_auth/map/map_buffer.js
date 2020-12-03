import Map from "./map";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    restaurant: state.session.user.place,
})

const MapBuffer = props => (
    props.restaurant ? <Map /> : <div></div>
)

export default connect(mapStateToProps, null)(MapBuffer)
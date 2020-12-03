import React from 'react';
import { fetchRestaurant } from '../../actions/places_actions';
import { connect } from 'react-redux';


class Map extends React.Component {


  componentDidMount() {
    this.props.fetchRestaurant();
  }


  render() {
  
    if (this.props.restaurant) {
        return (
          <div>
          <h1>Map</h1>
        </div>
      )
    } else {
      return (
        null
      )
    }
  }


}


const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: this.state.session.place,
    currentMood: this.ownProps.currentMood
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurant: (mood) => dispatch(fetchRestaurant(mood))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
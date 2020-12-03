import { connect } from 'react-redux';
import { fetchRestaurant } from '../../../actions/places_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state) => {

  return {
    moods: state.session.user.moods
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurant: (mood) => dispatch(fetchRestaurant(mood))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
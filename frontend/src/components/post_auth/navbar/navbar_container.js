import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { withRouter } from 'react-router'
import NavBar from './navbar';

const mSTP = (state, ownProps) => {
    return {
        loggedIn: state.session.isAuthenticated,
        location: ownProps.location
    }
};

export default withRouter(connect(mSTP, {logout})(NavBar));
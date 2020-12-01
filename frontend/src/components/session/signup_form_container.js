import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    };
};

const mDTP = (dispatch) => {
    return {
        signup: user => dispatch(signup(user))
    };
};
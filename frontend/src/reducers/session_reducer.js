import { RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER, RECEIVE_USER_SIGNIN } from "../actions/session_actions";


//Why is default user an empty object but logging out returns undefined?
const defaultState = {
  isAuthenticated: false,
  user: {}
};

const sessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_SIGNIN:
      return {
        ...state,
        isSignedIn: true,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      }
    default:
      return state;
  }
}

export default sessionReducer;
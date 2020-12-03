import { RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER, RECEIVE_USER_SIGNIN } from "../actions/session_actions";
import { RECEIVE_USER_MOOD } from "../actions/mood_actions";
import { RECEIVE_PLACE } from "../actions/places_actions";

//Why is default user an empty object but logging out returns undefined?
const defaultState = {
  isAuthenticated: false,
  user: {
    moods: {}
  }
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
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
      };
    case RECEIVE_USER_MOOD:
      newState.user.moods = action.newMood.data.moods;
      return newState;
    case RECEIVE_PLACE:
      newState.user.place = action.place;
      return newState;
    default:
      return state;
  }
}

export default sessionReducer;
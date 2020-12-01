import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";


//Why is default user an empty object but logging out returns undefined?
const defaultState = {
  isAuthenticated: false,
  user: {}
};
export default function(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    default:
      return state;
  }
}
import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
// import mapKey from "./map_reducer";

const RootReducer = combineReducers({
  session,
  errors,
  // mapKey
});

export default RootReducer;
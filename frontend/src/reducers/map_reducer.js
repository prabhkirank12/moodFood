// import { RECEIVE_MAP_KEY } from "../actions/map_actions"

// const defaultState = {
//   mapKey: null
// }

// const mapReducer = (state = defaultState, action) => {
//   Object.freeze(state);
//   let newState = Object.assign({}, state); 
//   switch (action.type) {
//     case RECEIVE_MAP_KEY:
//       newState.mapKey = action.key;
//       return newState;
//     default:
//       return state;
//   }
// }

// export default mapReducer;
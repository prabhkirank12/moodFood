// import { RECEIVE_USER_MOOD } from "../actions/mood_actions";


// //Why is default user an empty object but logging out returns undefined?
// const defaultState = {
//   user: {
//     moods: {}
//   }
// };

// const moodsReducer = (state = defaultState, action) => {
//   Object.freeze(state);
//   let newState = Object.assign({}, state);
//   switch (action.type) {
//     case RECEIVE_USER_MOOD:
//       newState.user[moods] = action.newMood.data;
//       return newState;
//     default:
//       return state;
//   }
// }

// export default moodsReducer;
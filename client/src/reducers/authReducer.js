import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  // verify if action in the reducer is working
  //console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // this is the User model/data
    default:
      return state;
  }
}

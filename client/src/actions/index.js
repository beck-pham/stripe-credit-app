import axios from "axios";
// THIS ACTS AS AN ACTION TYPES.JS

import { FETCH_USER } from "./types";

// export const fetchUser = () => {
//   // this mean dispatch function only get call after axios fetch the needed data
//   return function(dispatch) {
//     axios
//       .get("/api/current_user")
//       .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };

export const fetchUser = () => async dispatch => {
  // this mean dispatch function only get call after axios fetch the needed data
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

//update current credits of a user, then fetch that data to reflect on header component
export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

//import { memoize } from "lodash";
import jsonplaceholder from "../api/jsonPlaceholder";

// return a function to thunk (middleware)
export const fetchPost = () => async (dispatch) => {
  const res = await jsonplaceholder.get("/posts");
  //redux-thunk
  dispatch({ type: "FETCH_POSTS", payload: res.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: res.data });
};

//Lodash memoize (every request only ran once)
//pass id & dispatch to _memFetchUser to prevent fetching repeated data
// export const fetchUser = (id) => (dispatch) => __memFetchUser(id, dispatch);

// const __memFetchUser = memoize(async (id, dispatch) => {
//   const res = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: res.data });
// });
